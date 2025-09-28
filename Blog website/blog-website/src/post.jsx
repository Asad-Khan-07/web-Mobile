import React, { useState } from 'react'
import Data from './data'
import { NavLink, Outlet } from 'react-router'
import { useLoaderData } from 'react-router'

const Post = () => {
   
    // const [post,setPost]=useState([])

    // setPost(book)
    
    const book=useLoaderData()
    console.log(book);


  return (
    <div>
      <div  style={{color:"#b0acad",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"40px"}}>Postlist...</div>  
      
        <NavLink to={"data"}><h1>Harry Potter</h1></NavLink>
      {/* <Data /> */}
      <Outlet context={book}/>
      
    </div>
  )
}

export default Post
