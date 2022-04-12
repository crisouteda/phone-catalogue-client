/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Flex, Header, PhoneCard, Card } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";
import { PageLayout } from "./Page.style";
import { PhoneModal } from "../components/phoneModal";

const loadingCards = Array.apply(null, Array(10));

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
      <PageLayout>
        <Flex>
          {phonesLoading
            ? loadingCards?.map((_, i) => (
                <Card
                  key={i}
                  image={undefined}
                  altImage={undefined}
                  children={null}
                  handleOnClick={undefined}
                />
              ))
            : phones?.map((phone) => (
                <PhoneCard key={phone.id} phone={phone} />
              ))}
        </Flex>
      </PageLayout>
      <PhoneModal />
    </>
  );
}
