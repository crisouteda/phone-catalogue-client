/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Flex, Header, Card, Modal } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";
import { PageLayout } from "./Page.style";

const PhoneModal = lazy(() => import("../components/phoneModal"));
const PhoneCard = lazy(() => import("../components/phoneCard"));

const loadingCards = Array.apply(null, Array(10));

export default memo(function Dashboard() {
  const location: any = useLocation();
  const { handleGetPhones, handleGetPhone, handleClearPhone } =
    useContextActions();
  const { phones, phonesLoading } = useContextState();

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
    handleGetPhones();
  }, []);

  return (
    <>
      <Header title="Phone Catalogue App" />
      <PageLayout>
        <Flex>
          {phonesLoading
            ? loadingCards?.map((_, i) => <Card key={i} />)
            : phones?.map((phone) => (
                <Suspense key={phone.id} fallback={<Card />}>
                  <PhoneCard phone={phone} />
                </Suspense>
              ))}
        </Flex>
      </PageLayout>
      <Suspense fallback={<Modal />}>
        <PhoneModal />
      </Suspense>
    </>
  );
});
