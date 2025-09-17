import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

// V3 için zorunlu: sistem oluştur ve provider'a value olarak ver
const system = createSystem(defaultConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider value={system}>
    <App />
  </ChakraProvider>
);