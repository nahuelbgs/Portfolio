import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PortfolioContextProvider from "./context/PortfolioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioContextProvider value={[]}>
      <App />
    </PortfolioContextProvider>
  </React.StrictMode>
);
