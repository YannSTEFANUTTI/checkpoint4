import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RestaurantContextProvider from "./contexts/RestaurantContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <RestaurantContextProvider>
      <App />
    </RestaurantContextProvider>
  </BrowserRouter>
);
