import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import { productContext } from './user'
import { NavLink} from 'react-router-dom'
import Form from './form'
import { useNavigate } from "react-router-dom";
import { themeContext } from './them'
import { toast } from 'react-toastify';

const Layout = () => {
  
    const [theme,settheme]=useState(false)
    const  {user,setUser}=useContext(productContext)
    const  {mode}=useContext(themeContext)
    const [add,setAdd]=useState(mode.one)

  const navigate=useNavigate()
  const logOut=()=>{
    setUser("")
    navigate("/")
    toast.info("You have been logged out!", {
    className:"my-toast",
    position: "top-center",
    autoClose: 2000,
  });
    document.body.style.backgroundColor="#f7f3e4"
  }

  const handler=()=>{
    settheme(!theme)
    console.log(theme);
    console.log(add);
    }


    useEffect(()=>{
      
      if (theme===false) {
        setAdd(mode.one)
        document.body.style.backgroundColor="#f7f3e4"
        document.body.style.transition = "background-color 0.5s ease"
      }else{
        setAdd(mode.two)
        document.body.style.backgroundColor="#4f1675"
        document.body.style.transition = "background-color 0.5s ease"
      } 
    },[theme])

  return (
    <>
      <nav className="nav-bar">
      <h1 style={{ color: add === mode.two ? "#f7f3e4" : "#4f1675",transition:"color 0.5s ease" }}>Welcome,{user}</h1>
       <button onClick={logOut}>Logout</button>
       <button onClick={handler}>Change Mode</button>
      </nav>
     
    </>
  )
} 

export default Layout
