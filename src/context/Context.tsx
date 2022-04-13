import React, { useReducer, useMemo } from "react";
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAIL,
  GET_PHONE,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAIL,
  CLEAR_PHONE,
  // SING_UP,
  // SIGN_UP_SUCCESS,
  // SIGN_UP_FAIL,
  // SING_IN,
  // SIGN_IN_FAIL,
  // SIGN_IN_SUCCESS,
  // IS_AUTH,
  // IS_AUTH_SUCCESS,
  // IS_AUTH_FAIL,
} from "./actionTypes";
import Actions, { iActions } from "./ContextActions";
import { IPhone } from "../types";

// Interface for the payload
// export interface IPayload {}

// Interface for the state
interface iState {
  phones: IPhone[];
  phonesLoading: boolean;
  phonesError: any;
  phone?: IPhone;
  phoneLoading: boolean;
  phoneError: any;
  lastScanned?: string;
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
        phones: [...state.phones, ...action.payload],
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
    case CLEAR_PHONE:
      return {
        ...state,
        phone: undefined,
      };
    default:
      return state;
  }
}

// eslint-disable-next-line consistent-return

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
