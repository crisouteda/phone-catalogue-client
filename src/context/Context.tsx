import React, { useReducer, useMemo, useEffect } from "react";
import {
  GET_PHONES,
  GET_PHONES_SUCCESS,
  GET_PHONES_FAIL,
  GET_PHONE,
  GET_PHONE_SUCCESS,
  GET_PHONE_FAIL,
} from "./actionTypes";
import Actions, { iActions } from "./ContextActions";

// Interface for the payload
// export interface IPayload {}

// Interface for the state
interface iState {
  phones: Object[];
  phonesLoading: boolean;
  phonesError: any;
  phone?: { id: string };
  phoneLoading: boolean;
  phoneError: any;
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
        phones: action.payload,
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
        phonesLoading: true,
        phonesErorr: null,
      };
    case GET_PHONE_SUCCESS:
      return {
        ...state,
        phones: action.payload,
        phonesLoading: false,
      };
    case GET_PHONE_FAIL:
      return {
        ...state,
        phonesLoading: false,
        phonesError: action.payload,
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
