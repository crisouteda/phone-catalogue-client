import React, { useEffect } from "react";
import { Flex, Header, Card } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";
import { PageLayout } from "./Page.style";

export default function Dashboard() {
  const { handleGetPhones } = useContextActions();
  const { phones, phonesLoading, phonesError } = useContextState();

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
    </>
  );
}
