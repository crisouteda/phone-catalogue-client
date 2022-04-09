import React, { useEffect } from "react";
import { Header } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";

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
      {console.log({ phones })}
    </>
  );
}
