import React from "react";
import ReactDOM from "react-dom/client";
import { LoginPage } from "./LoginPage.jsx";
import { checkIfLoggedIn } from "../logic/utils";
import { DELargeHeader } from "./components.jsx";
import "../css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DELargeHeader>Login</DELargeHeader>
    <LoginPage></LoginPage>
  </React.StrictMode>
);

document.addEventListener('DOMContentLoaded', (event) => {
  checkIfLoggedIn();
});