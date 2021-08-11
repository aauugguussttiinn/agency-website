import React from "react";
import ReactDOM from "react-dom";
import ThemeContextProvider from 'Context/ThemeContext';
import App from "./App";
import "styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);