import React from "react";
import { ThemeService } from "./services";
import { Text } from "./components";

import "./App.css";

function App() {
  return (
    <ThemeService>
      <div>
        <Text text="Hola" />
        <Text text="Adios" secondary />
      </div>
    </ThemeService>
  );
}

export default App;
