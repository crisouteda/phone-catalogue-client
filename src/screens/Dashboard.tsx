/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo, lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ITEMS_DISPLAYED, CREATE_PHONE_BUTTON } from "../constants";
import {
  Flex,
  Header,
  Card,
  Modal,
  LoadingCards,
  RegisterModal,
  PrimaryButton,
} from "../components";
import { useContextActions, useContextState } from "../context";
import { PageLayout } from "./Page.style";
import CreateModal from "../components/createModal";

const PhoneModal = lazy(() => import("../components/phoneModal"));
const PhoneCard = lazy(() => import("../components/phoneCard"));

export default memo(function Dashboard() {
  const { handleGetPhones } = useContextActions();
  const { phones, phonesLimitReached, lastScanned, isAuth } = useContextState();
  const [openCreate, setOpenCreate] = useState(false);

  const fetchMoreData = () => {
    handleGetPhones(ITEMS_DISPLAYED, lastScanned);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const hasMore = !phonesLimitReached || lastScanned === undefined;

  return (
    <>
      <Header />
      <PageLayout className="page">
        {isAuth && (
          <PrimaryButton
            text={CREATE_PHONE_BUTTON}
            handleOnClick={() => setOpenCreate(true)}
          />
        )}
        {phones?.length ? (
          <InfiniteScroll
            dataLength={phones.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<LoadingCards />}
          >
            <Flex>
              {phones?.map((phone, i) => {
                return (
                  <Suspense
                    key={`suspense-${phone.id}-${i}`}
                    fallback={<Card />}
                  >
                    <PhoneCard phone={phone} key={`card-${phone.id}-${i}`} />
                  </Suspense>
                );
              })}
            </Flex>
          </InfiniteScroll>
        ) : (
          <LoadingCards />
        )}
      </PageLayout>
      <Suspense fallback={<Modal key="modal" />}>
        <PhoneModal key="phoneModal" />
        {openCreate && (
          <CreateModal
            setClose={() => setOpenCreate(false)}
            key="createModal"
          />
        )}
        <RegisterModal />
      </Suspense>
    </>
  );
});
