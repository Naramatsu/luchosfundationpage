import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "kromac-ui-18/src/css/style.css";
import { BrowserRouter as Router } from "react-router-dom";
import BuildingPage from "./components/BuildingPage/BuildingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const { REACT_APP_IS_BUILDING_APP } = process.env;
const isBuildingApp = REACT_APP_IS_BUILDING_APP;

root.render(
  <React.StrictMode>
    <Router>{isBuildingApp ? <BuildingPage /> : <App />}</Router>
  </React.StrictMode>
);
