import React from "react";
import { createRoot } from "react-dom/client";
// getCLS(onPerfEntry);
import StudentDashboard from "./StudentDashboard";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material";
import GlobalStyles from "./global";
import App from "./App";
import "./index.css";

const muiTheme = createTheme();
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
reportWebVitals();
