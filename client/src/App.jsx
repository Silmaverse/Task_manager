import React from "react";
import { Route, Routes } from "react-router";
import {BrowserRouter} from "react-router"
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmailVerify from "./pages/EmailVerify";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/email-verify" element={<EmailVerify/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>         
      </Routes>
   </BrowserRouter>
  );
};

export default App;
