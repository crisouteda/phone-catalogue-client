import React from "react";
import { getPhones, getPhone, signUp, signIn, isUserAuth } from "../api";
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAIL,
  GET_PHONE,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAIL,
  CLEAR_PHONE,
  SING_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SING_IN,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  IS_AUTH,
  IS_AUTH_SUCCESS,
  IS_AUTH_FAIL,
} from "./actionTypes";

export interface iActions {
  handleGetPhones: any;
  handleGetPhone: any;
  handleClearPhone: any;
  handleSignUp: any;
  handleSignIn: any;
  handleIsSign: any;
}

function handleGetPhones(dispatch: React.Dispatch<any>) {
  return async function handleGetPhones(items: number, lastScanned?: string) {
    dispatch({ type: GET_PHONES });
    try {
      const response = await getPhones(items, lastScanned);
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
      dispatch({ type: GET_PHONE_SUCCESS, payload: response[0] });
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

function handleSignUp(dispatch: React.Dispatch<any>) {
  return async function handleGetPhones(email: string, password: string) {
    dispatch({ type: SING_UP });
    try {
      const response = await signUp(email, password);
      dispatch({ type: SIGN_UP_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: SIGN_UP_FAIL, payload: e });
    }
  };
}

function handleSignIn(dispatch: React.Dispatch<any>) {
  return async function handleGetPhone(email: string, password: string) {
    dispatch({ type: SING_IN });
    try {
      const response = await signIn(email, password);
      dispatch({ type: SIGN_IN_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: SIGN_IN_FAIL, payload: e });
    }
  };
}

function handleIsSign(dispatch: React.Dispatch<any>) {
  return async function handleGetPhone(email: string, password: string) {
    dispatch({ type: IS_AUTH });
    try {
      const response = await isUserAuth();
      dispatch({ type: IS_AUTH_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: IS_AUTH_FAIL, payload: e });
    }
  };
}

const functions = {
  handleGetPhones,
  handleGetPhone,
  handleClearPhone,
  handleSignUp,
  handleSignIn,
  handleIsSign,
};

export default functions;
