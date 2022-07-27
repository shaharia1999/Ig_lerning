import React from "react";
import "./asset/css/fontawesome.css";
import { HashRouter  } from "react-router-dom";
import AppRoute from "../src/route/AppRoute/AppRoute";

function App() {
  return (
      <HashRouter >
        <AppRoute />
      </HashRouter >
  );
}

export default App;

