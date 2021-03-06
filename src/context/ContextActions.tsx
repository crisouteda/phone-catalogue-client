import React from "react";
import {
  getPhones,
  getPhone,
  signUp,
  signIn,
  createPhone,
  updatePhone,
  deletePhone,
  // isUserAuth
} from "../api";
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAIL,
  GET_PHONE,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAIL,
  CREATE_PHONE,
  CREATE_PHONE_SUCCESS,
  CREATE_PHONE_FAIL,
  UPDATE_PHONE,
  UPDATE_PHONE_SUCCESS,
  UPDATE_PHONE_FAIL,
  DELETE_PHONE,
  DELETE_PHONE_SUCCESS,
  DELETE_PHONE_FAIL,
  CLEAR_PHONE,
  OPEN_AUTH,
  CLOSE_AUTH,
  SING_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SING_IN,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  LOG_OUT,
  COLOR_THEME,
} from "./actionTypes";

import { IPhone } from "../types";
export interface iActions {
  handleGetPhones: any;
  handleGetPhone: any;
  handleCreatePhone: any;
  handleUpdatePhone: any;
  handleDeletePhone: any;
  handleClearPhone: any;
  handleOpenAuth: any;
  handleCloseAuth: any;
  handleSignUp: any;
  handleSignIn: any;
  handleLogOut: any;
  handleGetAvailablePhones: any;
  handleColorTheme: any;
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

function handleCreatePhone(dispatch: React.Dispatch<any>) {
  return async function (newPhone: IPhone) {
    dispatch({ type: CREATE_PHONE });
    try {
      const response = await createPhone(newPhone);
      dispatch({ type: CREATE_PHONE_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: CREATE_PHONE_FAIL, payload: e });
    }
  };
}

function handleUpdatePhone(dispatch: React.Dispatch<any>) {
  return async function (phone: IPhone) {
    dispatch({ type: UPDATE_PHONE });
    try {
      const response = await updatePhone(phone);
      dispatch({ type: UPDATE_PHONE_SUCCESS, payload: response });
    } catch (e) {
      dispatch({ type: UPDATE_PHONE_FAIL, payload: e });
    }
  };
}

function handleDeletePhone(dispatch: React.Dispatch<any>) {
  return async function (id: string) {
    dispatch({ type: DELETE_PHONE });
    try {
      const response = await deletePhone(id);
      dispatch({ type: DELETE_PHONE_SUCCESS, payload: response[0] });
    } catch (e) {
      dispatch({ type: DELETE_PHONE_FAIL, payload: e });
    }
  };
}

function handleClearPhone(dispatch: React.Dispatch<any>) {
  return async function () {
    dispatch({ type: CLEAR_PHONE });
  };
}

function handleOpenAuth(dispatch: React.Dispatch<any>) {
  return async function () {
    dispatch({ type: OPEN_AUTH });
  };
}

function handleCloseAuth(dispatch: React.Dispatch<any>) {
  return async function () {
    dispatch({ type: CLOSE_AUTH });
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

function handleLogOut(dispatch: React.Dispatch<any>) {
  return async function () {
    dispatch({ type: LOG_OUT });
  };
}

function handleColorTheme(dispatch: React.Dispatch<any>) {
  return async function (theme: string) {
    dispatch({ type: COLOR_THEME, payload: theme });
  };
}

const functions = {
  handleGetPhones,
  handleGetPhone,
  handleCreatePhone,
  handleUpdatePhone,
  handleDeletePhone,
  handleClearPhone,
  handleOpenAuth,
  handleCloseAuth,
  handleSignUp,
  handleSignIn,
  handleLogOut,
  handleColorTheme,
};

export default functions;
