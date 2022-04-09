import React from "react";
import { RoutingService, ThemeService } from "./services";
import { ContextProvider } from "./context";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <ThemeService>
        <RoutingService />
      </ThemeService>
    </ContextProvider>
  );
}

export default App;
