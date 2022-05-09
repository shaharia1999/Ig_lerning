import React from "react";
import './App.css';
import "./asset/css/fontawesome.css";
import { HashRouter } from "react-router-dom";
import AppRoute from "../src/route/AppRoute/AppRoute";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <HashRouter>
      <AppRoute />
    </HashRouter>
    </QueryClientProvider>
  );
}

export default App;

