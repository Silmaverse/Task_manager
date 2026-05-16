import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import EmailVerify from "./pages/EmailVerify";
import Dashboard from "./pages/Dashboard";
import LayoutOne from "./layouts/LayoutOne";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Dashboard />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-verify" element={<EmailVerify />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
