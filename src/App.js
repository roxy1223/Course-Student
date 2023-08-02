import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./Pages/Login/index";
import Signup from "./Pages/Signup/index";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
