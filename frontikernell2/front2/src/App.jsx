import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Root } from "postcss";
import  Home from "./pages/Home"
import Projects from "./pages/Projects";
import Dashboard from "./components/Sidenav"
import Sidenav from "./components/Sidenav"

export default function App(){
  return(
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Sidenav/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/projects" element = {<Projects />}/>
        <Route/>
      </Routes>
     </BrowserRouter>
    </>
  )
}