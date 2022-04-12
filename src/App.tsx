import React, { memo } from "react";
import { RoutingService, ThemeService } from "./services";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <ThemeService>
        <RoutingService />
      </ThemeService>
    </ContextProvider>
  );
}

export default memo(App);
