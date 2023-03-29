import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

let theme = createTheme({
  palette: {
    primary: {
      main: "#00040f",
    },
    secondary: {
      main: "#F15C26",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
