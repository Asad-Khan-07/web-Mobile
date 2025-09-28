import React from 'react'
import './index.css'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <>
      <div className="nav-container">
          <ul className='nav-link-contanier'>
      <NavLink style={{textDecoration:"none",color:"#b0acad",fontFamily:"sans-serif",listStyleType:"none"}} to={"/"}><li>Home</li></NavLink>
      <NavLink style={{textDecoration:"none",color:"#b0acad",fontFamily:"sans-serif",listStyleType:"none"}} to={"/blog"}><li>Blog</li></NavLink>
      <NavLink style={{textDecoration:"none",color:"#b0acad",fontFamily:"sans-serif",listStyleType:"none"}} to={"/about"}><li>About</li></NavLink>   
            </ul>  
      </div>
    </>
  )
}

export default Nav
