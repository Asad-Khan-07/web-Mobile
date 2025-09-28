import React from 'react'
import Layout from './layout'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      <Layout/>
      <div style={{color:"#b0acad",fontWeight:"bolder",fontFamily:"sans-serif",fontSize:"40px"}}>Home</div>
      <Outlet/>
    </div>
  )
}

export default Home
