import { useState } from "react";


import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import "../src/mystyles.css"

function App() {
  return (
    <>
   
    
    <BrowserRouter>
   
      <MyNavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
     
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
