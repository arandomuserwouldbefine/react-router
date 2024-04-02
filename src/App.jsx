import { useState } from 'react'
import { Route, Routes } from "react-router-dom";

import './App.css'
import Home from './Pages/home';
import Navbar from './Components/navbar';
import Services from './Pages/services';
import About from './Pages/about';
import Contact from './Pages/contact';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
