import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Journey from "./Components/Journey";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Skill" element={<Skill/>} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;