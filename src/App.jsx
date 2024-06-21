import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Users from "./pages/users";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./pages/login";
import Register from "./pages/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
      {/* <Footer /> */}
    </>
  );
};

export default App;
