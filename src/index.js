import React from "react";
import "./Assets/Global.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { Navbar } from "./Components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Router />
  </BrowserRouter>
);
