import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "9520e969-3ebe-482c-b55d-39ff559f2c92"
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

root.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
