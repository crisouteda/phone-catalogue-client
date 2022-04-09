import React, { useEffect } from "react";
import { Header } from "../components";
import { useContextActions } from "../context";
import { useContextState } from "../context";

export default function Dashboard() {
  const { handleGetPhones } = useContextActions();
  const { getPhones, getPhonesLoading, getPhonesError } = useContextState();

  useEffect(() => {
    handleGetPhones();
  }, []);

  return (
    <>
      <Header title="Phone Catalogue App" />
      {getPhonesLoading && <span>Loading...</span>}
      {console.log({ getPhones })}
    </>
  );
}
