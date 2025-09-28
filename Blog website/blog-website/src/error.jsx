import React from 'react'
import { useNavigate } from 'react-router'

const Errorpage = () => {
    const navigate=useNavigate()
    const backhome=()=>{
        navigate("/")
    }
  return (
    <div>
      <div>
        <h1  style={{color:"#b0acad",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"40px"}}>404 Not found</h1>
        <button onClick={backhome} style={{width:"70px",height:"35px", borderRadius:"10px",color:"#a3070c",border:"none",cursor:"pointer"}}>home</button>
        </div>
    </div>
  )
}

export default Errorpage
