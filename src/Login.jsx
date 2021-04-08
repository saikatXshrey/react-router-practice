import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const toasterHandler = () => {
    toast("Login Successfully");
    // alert("Login Success");
  };

  return (
    <>
      <div>Welcome to Login Page</div>
      <button onClick={toasterHandler}>Click</button>
      <ToastContainer />
    </>
  );
};

export default Login;
