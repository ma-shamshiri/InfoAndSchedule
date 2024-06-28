import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
// import theme from "./chakra-ui/theme";
import theme from "./theme";

// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
import "./global.css";
import "./normalize.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
// import { KBarWrapper } from "./components/command-bar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {/* <App /> */}
          <RouterProvider router={router} />
      </ChakraProvider>
  </React.StrictMode>
);