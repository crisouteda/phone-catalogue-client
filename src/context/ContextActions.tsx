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
  return async function handleGetPhones() {
    dispatch({ type: GET_PHONES });
    try {
      const { data } = await getPhones();
      dispatch({ type: GET_PHONES_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: GET_PHONES_FAIL, payload: e });
    }
  };
}

function handleGetPhone(dispatch: React.Dispatch<any>) {
  return async function handleGetPhone(id: string) {
    dispatch({ type: GET_PHONE });
    try {
      const { data } = await getPhone(id);
      dispatch({ type: GET_PHONE_SUCCESS, payload: data.Items });
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
