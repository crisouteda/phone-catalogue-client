/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo, lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { HeaderTitle, ItemsDisplayed } from "../constants";
import { Flex, Header, Card, Modal, LoadingCards } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";
import { PageLayout } from "./Page.style";

const PhoneModal = lazy(() => import("../components/phoneModal"));
const PhoneCard = lazy(() => import("../components/phoneCard"));

export default memo(function Dashboard() {
  const location: any = useLocation();
  const { handleGetPhones, handleGetPhone, handleClearPhone } =
    useContextActions();
  const { phones, lastScanned } = useContextState();

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    const id = url.get("id");
    if (id) {
      handleGetPhone(id);
    } else {
      handleClearPhone();
    }
  }, [location]);

  const fetchMoreData = () => {
    handleGetPhones(ItemsDisplayed, lastScanned);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <>
      <Header title={HeaderTitle} />
      <PageLayout>
        {phones?.length ? (
          <InfiniteScroll
            dataLength={phones?.length}
            next={fetchMoreData}
            hasMore={!!lastScanned}
            loader={<LoadingCards />}
          >
            <Flex>
              {phones?.map((phone) => (
                <Suspense key={phone.id} fallback={<Card />}>
                  <PhoneCard phone={phone} />
                </Suspense>
              ))}
            </Flex>
          </InfiniteScroll>
        ) : (
          <LoadingCards />
        )}
      </PageLayout>
      <Suspense fallback={<Modal />}>
        <PhoneModal />
      </Suspense>
    </>
  );
});
