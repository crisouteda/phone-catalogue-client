import React from "react";
import { ThemeService } from "./services";
import { ContextProvider } from "./context";
import Dashboard from "./screens/Dashboard";

import "./App.css";

function App() {
  return (
    <ContextProvider>
      <ThemeService>
        <Dashboard />
      </ThemeService>
    </ContextProvider>
  );
}

export default App;
