import React, { useReducer, useMemo, useEffect } from "react";
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
} from "./actionTypes";
import Actions, { iActions } from "./ContextActions";
import { IPhone } from "../types";

// Interface for the state
interface iState {
  phones: IPhone[];
  phonesLoading: boolean;
  phonesError: any;
  phone?: IPhone;
  phoneLoading: boolean;
  phoneError: any;
  createPhone?: any;
  createPhoneLoading?: boolean;
  createPhoneError?: any;
  updatePhone?: any;
  updatePhoneLoading?: boolean;
  updatePhoneError?: any;
  deletePhoneLoading?: boolean;
  deletePhoneError?: any;
  lastScanned?: string;
  openAuth: boolean;
  authToken?: string;
  isAuth: boolean;
  signUpLoading: boolean;
  signUpError: any;
  signInLoading: boolean;
  signInError: any;
}

// Interface for the actions

const StateContext = React.createContext<Partial<iState>>({});
const DispatchContext = React.createContext<Partial<iActions>>({});

const initialState: iState = {
  phones: [],
  phonesLoading: false,
  phonesError: null,
  phone: undefined,
  phoneLoading: false,
  phoneError: null,
  lastScanned: undefined,
  openAuth: false,
  isAuth: false,
  signUpLoading: false,
  signUpError: null,
  signInLoading: false,
  signInError: null,
};

function reducer(state: iState, action: { type: string; payload: any }) {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phonesLoading: true,
        phonesErorr: null,
      };
    case GET_PHONES_SUCCESS:
      return {
        ...state,
        phones: [...state.phones, ...action.payload.newItems],
        lastScanned: action.payload.lastEvaluatedKey,
        phonesLoading: false,
      };
    case GET_PHONES_FAIL:
      return {
        ...state,
        phonesLoading: false,
        phonesError: action.payload,
      };
    case GET_PHONE:
      return {
        ...state,
        phoneLoading: true,
        phoneErorr: null,
      };
    case GET_PHONE_SUCCESS:
      return {
        ...state,
        phone: action.payload,
        phoneLoading: false,
      };
    case GET_PHONE_FAIL:
      return {
        ...state,
        phoneLoading: false,
        phoneError: action.payload,
      };
    case CREATE_PHONE:
      return {
        ...state,
        createPhoneLoading: true,
        createPhoneError: null,
      };
    case CREATE_PHONE_SUCCESS:
      return {
        ...state,
        createPhone: action.payload,
        createPhoneLoading: false,
      };
    case CREATE_PHONE_FAIL:
      return {
        ...state,
        createPhoneLoading: false,
        createPhoneError: action.payload,
      };
    case UPDATE_PHONE:
      return {
        ...state,
        updatePhoneLoading: true,
        updatePhoneError: null,
      };
    case UPDATE_PHONE_SUCCESS:
      return {
        ...state,
        updatePhone: action.payload,
        updatePhoneLoading: false,
      };
    case UPDATE_PHONE_FAIL:
      return {
        ...state,
        updatePhoneLoading: false,
        updatePhoneError: action.payload,
      };
    case DELETE_PHONE:
      return {
        ...state,
        deletePhoneLoading: true,
        deletePhoneError: null,
      };
    case DELETE_PHONE_SUCCESS:
      return {
        ...state,
        phone: undefined,
        deletePhoneLoading: false,
      };
    case DELETE_PHONE_FAIL:
      return {
        ...state,
        deletePhoneLoading: false,
        deletePhoneError: action.payload,
      };
    case CLEAR_PHONE:
      return {
        ...state,
        phone: undefined,
      };
    case OPEN_AUTH:
      return {
        ...state,
        openAuth: true,
      };
    case CLOSE_AUTH:
      return {
        ...state,
        openAuth: false,
      };
    case SING_UP:
      return {
        ...state,
        signUpLoading: true,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        authToken: action.payload.token,
        isAuth: true,
        signUpLoading: false,
      };
    case SIGN_UP_FAIL:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.payload,
      };
    case SING_IN:
      return {
        ...state,
        signInLoading: true,
        signInError: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authToken: action.payload.token,
        isAuth: true,
        signInLoading: false,
      };
    case SIGN_IN_FAIL:
      return {
        ...state,
        signInLoading: false,
        signInError: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        authToken: undefined,
        isAuth: false,
      };
    default:
      return state;
  }
}

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const memorizedDispatchedFunctions = useMemo(() => {
    const dispatchedFunctions = {};
    Object.keys(Actions).forEach((actionName: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatchedFunctions[actionName] = Actions[actionName](dispatch);
    });
    return dispatchedFunctions;
  }, []);

  useEffect(() => {
    if (state.authToken) localStorage.setItem("token", state.authToken);
  }, [state.authToken]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={memorizedDispatchedFunctions}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

function useContextState() {
  const context: Partial<iState> = React.useContext(StateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useContextActions() {
  const context = React.useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useUserActions must be used within a UserProvider");
  }
  return context;
}

export { ContextProvider, useContextActions, useContextState };
