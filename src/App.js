import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Pages/Login/index";
import Signup from "./Pages/Signup/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
