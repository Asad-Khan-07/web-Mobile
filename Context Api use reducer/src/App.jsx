import { use, useState } from "react";
// import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Form from "./form";
import Layout from "./layout";
import { productContext } from "./user";
import { themeContext } from "./theme";
import { ToastContainer } from "react-toastify";
import { Inputprovider } from "./use reducer/inputContext";
import "react-toastify/dist/ReactToastify.css";
import { Themeprovider } from "./theme con,red/themeContext";

function App() {

  return (
      <Themeprovider>
      <Inputprovider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/layout" element={<Layout/>} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Inputprovider>
      </Themeprovider>
 
  );
}

export default App;
