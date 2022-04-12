/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, memo, lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import { HeaderTitle } from "../constants";
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
  const { phones, hasMorePhones } = useContextState();
  const [page, setPage] = useState(0);
  const items = 20;

  useEffect(() => {
    const url = new URLSearchParams(location.search);
    const id = url.get("id");
    if (id) {
      handleGetPhone(id);
    } else {
      handleClearPhone();
    }
  }, [location]);

  useEffect(() => {
    handleGetPhones(items, page);
  }, [items, page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header title={HeaderTitle} />
      <PageLayout>
        {phones?.length ? (
          <InfiniteScroll
            dataLength={phones?.length}
            next={fetchMoreData}
            hasMore={hasMorePhones || false}
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
