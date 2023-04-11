import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./pages/customer-dashboard/Layout";
import AdminLayout from "./pages/admin-dashboard/AdminLayout";
import { BrowserRouter, Link, Route, Routes, redirect, useNavigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Index from "./pages/index";
import TestModal from "./pages/TestModal";
// import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Employee from "./pages/Employee-dashboard/Employee-1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hidePopup } from "./redux-slice/UserSliceAuth";

function App() {
  const user = useSelector((state) => state.authUser);
  const dispatch=useDispatch()
  const browserPath = window.location.href;
  console.log("user app", user,browserPath,browserPath === "http://localhost:3000/");
  const navigate = useNavigate();
  console.log("window",window.location.pathname)
  
  const notify = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  const notifyError = (message) => toast.error(message, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/login');
    }
  }, [user.userLoggedIn]);
  
  useEffect(()=>{
     if(user.successPopup.state){
      notify(user.successPopup.message)
     setTimeout(()=>{ dispatch(hidePopup())},600)
     }
  },[user.successPopup.state])

  useEffect(()=>{
    if(user.errorPopup.state){
     notifyError(user.errorPopup.message)
    setTimeout(()=>{ dispatch(hidePopup())},600)
    }
 },[user.errorPopup.state])
  return (
    <div>
          <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        {/* {user.userLoggedIn? ( */}
        {/* <Routes>
           
          </Routes> */}
        {/* : ( */}
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
