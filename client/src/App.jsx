import React from "react";
import { Route, Routes } from "react-router";
import {BrowserRouter} from "react-router"
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmailVerify from "./pages/EmailVerify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Register />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/email-verify" element={<EmailVerify/>} />         
      </Routes>
   </BrowserRouter>
  );
};

export default App;
