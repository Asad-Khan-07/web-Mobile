import React, { useContext, useState } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'
import { productContext } from './user'
import Layout from './layout'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';

const Form = () => {

const [name,setName]=useState("")
const {setUser}=useContext(productContext)

const submitdata=()=>{
  setUser(name)
  toast.success("Login Successful!",{
  className:"my-toast",
  position: "top-center",
  autoClose: 2000, 
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  });

}

  return (
    <>
      <div className='main'>
      <div className="form-container">
      <h1>Context Api</h1>
      <input type="text" placeholder='Enter Your UserName' onChange={(e)=>{setName(e.target.value)}}/>
        <NavLink to={"/layout"}><button onClick={submitdata}>Submit</button></NavLink>

      </div>
    </div>

    </>
  )
}

export default Form
