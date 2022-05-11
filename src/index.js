import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#0052cc",
  //   },
  //   secondary: {
  //     main: "#ffffff",
  //   },
  // },
  // typography: {
  //   fontFamily: "YekanBakhBold",
  //   b: { fontFamily: "Roboto" },
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 501,
      mmd: 700,
      md: 900,
      lg: 1000,
      xl: 1300,
      xxl: 4096,
    },
  },
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
