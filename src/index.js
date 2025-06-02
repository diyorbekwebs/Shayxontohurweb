import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/font/font.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n';

import { HelmetProvider } from "react-helmet-async"; // 👈 Yangi import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* 👈 Barcha komponentlarni o‘rab oladi */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
