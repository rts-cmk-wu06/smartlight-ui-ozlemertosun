import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UrlProvider } from "./assets/components/urlContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UrlProvider>
        <App />
      </UrlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
