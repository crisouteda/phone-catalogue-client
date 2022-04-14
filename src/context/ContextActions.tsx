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
  SING_OUT,
  // IS_AUTH,
  // IS_AUTH_SUCCESS,
  // IS_AUTH_FAIL,
} from "./actionTypes";

export interface iActions {
  handleGetPhones: any;
  handleGetPhone: any;
  handleClearPhone: any;
  handleSignUp: any;
  handleSignIn: any;
  handleSignOut: any;
}

function handleGetPhones(dispatch: React.Dispatch<any>) {
  return async function (items: number, lastScanned?: string) {
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
  return async function (id: string) {
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
  return async function () {
    dispatch({ type: CLEAR_PHONE });
  };
}

function handleSignUp(dispatch: React.Dispatch<any>) {
  return async function (email: string, password: string) {
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
  return async function (email: string, password: string) {
    dispatch({ type: SING_IN });
    try {
      const response = await signIn(email, password);
      dispatch({ type: SIGN_IN_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: SIGN_IN_FAIL, payload: e });
    }
  };
}

function handleSignOut(dispatch: React.Dispatch<any>) {
  return async function () {
    dispatch({ type: SING_OUT });
  };
}

const functions = {
  handleGetPhones,
  handleGetPhone,
  handleClearPhone,
  handleSignUp,
  handleSignIn,
  handleSignOut,
};

export default functions;
