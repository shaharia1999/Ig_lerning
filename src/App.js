import React, { useEffect } from "react";
import "./asset/css/fontawesome.css";
import { HashRouter } from "react-router-dom";
import AppRoute from "../src/route/AppRoute/AppRoute";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();


  useEffect(() => {

    darkModeBtn();

  }, [])



  const darkModeBtn=()=>{
     //Icons
     const sunIcon = document.querySelector(".sun");
     const moonIcon = document.querySelector(".moon");
 
     // Theme Vars 
     const userTheme = localStorage.getItem("theme");
     const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
 
     // Icon Toggling
     const iconToggle = () => {
       moonIcon.classList.toggle("display-none");
       sunIcon.classList.toggle("display-none");
     };
 
     //Initial theme Check
     const themeCheck = () => {
       if (userTheme === "dark" || (!userTheme && systemTheme)) {
         document.documentElement.classList.add("dark");
         moonIcon.classList.add("display-none");
         return;
       }
       sunIcon.classList.add("display-none");
     };
 
     // Manual Theme Switch 
     const themeSwitch = () => {
       if (document.documentElement.classList.contains("dark")) {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
         iconToggle();
         return;
       }
       document.documentElement.classList.add("dark");
       localStorage.setItem("theme", "dark");
       iconToggle();
     };
 
     // call theme switch on clicking buttons
     sunIcon.addEventListener("click", () => {
       themeSwitch();
     })
     moonIcon.addEventListener("click", () => {
       themeSwitch();
     })
 
     //Invoke theme check on initial load
     themeCheck();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <AppRoute />
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;

