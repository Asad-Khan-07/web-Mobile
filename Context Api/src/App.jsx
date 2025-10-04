import { use, useState } from 'react'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Form from './form';
import Layout from './layout';
import { productContext } from './user'
import { themeContext } from './them';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [user,setUser]=useState()
    const [mode,setMode]=useState({one:"light",two:"dark"})

  return (
 <themeContext.Provider value={{mode,setMode}}>
  <productContext.Provider value={{user,setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/layout" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    <ToastContainer/>
    </productContext.Provider>
 </themeContext.Provider>
  )
  
}

export default App
