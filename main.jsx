import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ShopProvider from "./context/ShopContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopProvider>
      <App />
      <Toaster position="top-right" />
    </ShopProvider>
  </BrowserRouter>
);