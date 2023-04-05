import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./pages/customer-dashboard/Layout";
import AdminLayout from "./pages/admin-dashboard/AdminLayout";
import { BrowserRouter, Link, Route, Routes, redirect, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Index from "./pages/index";
import TestModal from "./pages/TestModal";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Employee from "./pages/Employee";

function App() {
  const user = useSelector((state) => state.authUser);
  const browserPath = window.location.href;
  console.log("user app", user,browserPath,browserPath === "http://localhost:3000/");
  const navigate = useNavigate();
  console.log("window",window.location.pathname)
  
 
  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/login');
    }
  }, [user.userLoggedIn]);
  return (
    <div>
        {/* {user.userLoggedIn? ( */}
        {/* <Routes>
           
          </Routes> */}
        ){/* : ( */}
        {/* "" */}
        {/* )} */}
        <Routes>
        
          <Route path="/login" element={<Login />}></Route>
          <Route path="/index" element={<Index />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/customer" element={<Layout />} />
          <Route path="/modal" element={<TestModal />} />
        </Routes>
     
    </div>
  );
}

export default App;
