import React, { useState } from 'react'
import Layout from './layout'
import Post from './post'
import { NavLink, Outlet, useLoaderData } from 'react-router'

const Blog = () => {

    const [post,setPost]=useState(false)

  return (
    <div>
        <Layout/>
        {/* <Post/> */}
<div style={{display:"flex",flexDirection:"column",alignItems:"center", width:"99vw"}}>
<span style={{color:"#b0acad",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"40px"}}>Blog</span>
<NavLink to={"post"} style={{color:"#b0acad",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"20px",textDecoration:"none"}}>Blog List</NavLink>
      </div>
        <Outlet/>
      {/* {post && <Post/>} */}
    </div>
  )
}

export default Blog
