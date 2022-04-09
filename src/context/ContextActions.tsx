import React from "react";
import { getPhones } from "../api";
import { GET_PHONES, GET_PHONES_SUCCESS, GET_PHONES_FAIL } from "./actionTypes";

export interface iActions {
  handleGetPhones: any;
}

function handleGetPhones(dispatch: React.Dispatch<any>) {
  return function handleGetPhones() {
    dispatch({ type: GET_PHONES });
    try {
      const response = getPhones();
      dispatch({ type: GET_PHONES_SUCCESS, payload: { phones: response } });
    } catch (e) {
      dispatch({ type: GET_PHONES_FAIL, payload: { error: e } });
    }
  };
}

function handleGetPhones2(dispatch: React.Dispatch<any>) {
  return async function handleGetPhones() {
    dispatch({ type: GET_PHONES });
    try {
      const response = await getPhones();
      dispatch({ type: GET_PHONES_SUCCESS, payload: { phones: response } });
    } catch (e) {
      dispatch({ type: GET_PHONES_FAIL, payload: { error: e } });
    }
  };
}

const functions = {
  handleGetPhones,
  handleGetPhones2,
};

export default functions;
