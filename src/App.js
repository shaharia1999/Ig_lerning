import React from "react";
import './App.css';
import { HashRouter } from "react-router-dom";
import AppRoute from "../src/route/AppRoute/AppRoute";

function App() {
  return (
    <HashRouter>
      <AppRoute />
    </HashRouter>
  );
}

export default App;

