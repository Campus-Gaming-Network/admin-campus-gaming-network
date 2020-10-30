import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "./components/Header";
import App from "./app";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import { SkipNavLink } from "@reach/skip-nav";
import { LocationProvider } from "@reach/router";
import "@reach/skip-nav/styles.css";
import "@reach/combobox/styles.css";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints
};

ReactDOM.render(
  <LocationProvider>
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <SkipNavLink />
      <Header />
      <App />
    </ThemeProvider>
  </LocationProvider>,
  document.getElementById("root")
);
