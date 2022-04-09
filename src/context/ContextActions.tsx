import React from "react";
import { getPhones } from "../api";
import { GET_PHONES, GET_PHONES_SUCCESS, GET_PHONES_FAIL } from "./actionTypes";

export interface iActions {
  handleGetPhones: any;
}

function handleGetPhones(dispatch: React.Dispatch<any>) {
  return async function handleGetPhones() {
    dispatch({ type: GET_PHONES });
    try {
      const { data } = await getPhones();
      dispatch({ type: GET_PHONES_SUCCESS, payload: { phones: data } });
    } catch (e) {
      dispatch({ type: GET_PHONES_FAIL, payload: { error: e } });
    }
  };
}

const functions = {
  handleGetPhones,
};

export default functions;
