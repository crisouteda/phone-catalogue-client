import React from "react";
import { getPhones, getPhone } from "../api";
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAIL,
  GET_PHONE,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAIL,
  CLEAR_PHONE,
} from "./actionTypes";

export interface iActions {
  handleGetPhones: any;
  handleGetPhone: any;
  handleClearPhone: any;
}

function handleGetPhones(dispatch: React.Dispatch<any>) {
  return async function handleGetPhones(items: number, pages: number) {
    dispatch({ type: GET_PHONES });
    try {
      const response = await getPhones(items, pages);
      dispatch({ type: GET_PHONES_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: GET_PHONES_FAIL, payload: e });
    }
  };
}

function handleGetPhone(dispatch: React.Dispatch<any>) {
  return async function handleGetPhone(id: string) {
    dispatch({ type: GET_PHONE });
    try {
      const response = await getPhone(id);
      console.log({ response });
      dispatch({ type: GET_PHONE_SUCCESS, payload: response.Items[0] });
    } catch (e) {
      dispatch({ type: GET_PHONE_FAIL, payload: e });
    }
  };
}

function handleClearPhone(dispatch: React.Dispatch<any>) {
  return async function handleClearPhone() {
    dispatch({ type: CLEAR_PHONE });
  };
}

const functions = {
  handleGetPhones,
  handleGetPhone,
  handleClearPhone,
};

export default functions;
