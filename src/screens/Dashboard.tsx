/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Flex, Header, Card } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";
import { PageLayout } from "./Page.style";
import { PhoneModal } from "../components/phoneModal";

export default function Dashboard() {
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
      {phonesLoading && <span>Loading...</span>}
      <PageLayout>
        <Flex>
          {phones?.map((phone) => (
            <Card phone={phone} />
          ))}
        </Flex>
      </PageLayout>
      <PhoneModal />
    </>
  );
}
