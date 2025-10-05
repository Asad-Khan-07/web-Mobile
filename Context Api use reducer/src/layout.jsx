import React, { useContext, useEffect, useReducer, useState } from "react";
import "./index.css";
import { productContext } from "./user";
import { NavLink } from "react-router-dom";
import Form from "./form";
import { useNavigate } from "react-router-dom";
import { themeContext } from "./theme";
import { toast } from "react-toastify";
import { inputContext } from "./use reducer/inputContext";
import { ThemeContext } from "./theme con,red/themeContext";

const Layout = () => {

 const {state,dispatch:inputdispatch}=useContext(inputContext)
 const {mode,dispatch}=useContext(ThemeContext)  


  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    toast.info("You have been logged out!", {
      className: "my-toast",
      position: "top-center",
      autoClose: 2000,
    });
    document.body.style.backgroundColor = "#f7f3e4";
    inputdispatch({type:"nothing"})
  };


  useEffect(() => {
    if (mode.mode1 === "light") {
      document.body.style.backgroundColor = "#f7f3e4";
      document.body.style.transition = "background-color 0.5s ease";
    }
    if (mode.mode1=== "dark") {
      document.body.style.backgroundColor = "#1e0742";
      document.body.style.transition = "background-color 0.5s ease";
    }
  }, [mode]);

  return (
    <>
      <nav className="nav-bar">
        <h1 style={{  color: mode.mode1 === "dark" ? "#f7f3e4" : "#1e0742",}}>
          Welcome,{state.username}
        </h1>
        <button onClick={logOut}>Logout</button>
        <button onClick={()=>{dispatch({type:"WHITE"})}}>Change Mode</button>
      </nav>
    </>
  );
};

export default Layout;
