import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductStore from "./hooks-store/product-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

configureProductStore();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
