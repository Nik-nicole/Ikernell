import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Root } from "postcss";
import  Home from "./pages/Projects"
import Projects from "./pages/Projects";
import Dashboard from "./components/sidebar"
import Sidebar from "./components/sidebar";

export default function App(){
  return(
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Sidebar/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        <Route/>
      </Routes>
     </BrowserRouter>
    </>
  )
}