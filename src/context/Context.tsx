import React, { useReducer, useMemo } from "react";
import {
  IS_SHOW_FAVOURITES,
  HANDLE_CODELANG,
  HANDLE_SELECTED_AUDIO,
} from "./actionTypes";
import Actions, { iActions } from "./ContextActions";

export interface IPayload {
  name: string;
  selectedAudio: { name: string; url: string };
  selectedLang: "Python" | "JavaScript";
}

// An interface for the state
interface iState {
  isShowFavourites: boolean;
  selectedAudio: { name: string; url: string };
  selectedLang: "Python" | "JavaScript";
}

// An interface for the actions

const StateContext = React.createContext<Partial<iState>>({});
const DispatchContext = React.createContext<Partial<iActions>>({});

function reducer(state: iState, action: { type: string; payload: IPayload }) {
  switch (action.type) {
    case IS_SHOW_FAVOURITES:
      return {
        ...state,
        isShowFavourites: !state?.isShowFavourites,
      };
    case HANDLE_SELECTED_AUDIO:
      return {
        ...state,
        selectedAudio: action.payload.selectedAudio,
      };
    case HANDLE_CODELANG:
      return {
        ...state,
        selectedLang: action.payload.selectedLang,
      };
    default:
      return state;
  }
}

// eslint-disable-next-line consistent-return

const initialState: iState = {
  isShowFavourites: false,
  selectedAudio: {
    name: "guy",
    url: "https://file.api.audio/voice-samples/guy.mp3",
  },
  selectedLang: "Python",
};

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
