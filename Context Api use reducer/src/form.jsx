import React, { useContext, useReducer, useState } from "react";
import "./index.css";
import { data, NavLink, useNavigate } from "react-router-dom";
import { productContext } from "./user";
import Layout from "./layout";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { inputContext } from "./use reducer/inputContext";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      username: "Asad",
    },
  });

    const {state,dispatch}=useContext(inputContext)
    
  const navigate = useNavigate();
  
  const submitdata = (data) => {   
    if (!state.username) {
      toast.error("⚠ Username is required!", {
        position: "top-center",
        autoClose: 2000,
        theme: "colored",
      });
    } else {
      navigate("/layout");
      toast.success("Login Successful!", {
        className: "my-toast",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  
  // const handleChange = (e) => {
  //   console.log(state);
      
  // };

  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1>Context API</h1>

          <form onSubmit={handleSubmit(submitdata)}>
            <input
              {...register("username", {
                required: "username is required",
              })}
              type="text"
              placeholder="Enter Your UserName"
              onChange={(e)=>{dispatch({
                  type: "SET_INPUT_VALUE",
                  payload: e.target.value,
                })}}
            />
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
