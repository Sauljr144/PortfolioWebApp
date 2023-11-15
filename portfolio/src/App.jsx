import "./App.css";
import { BrowserRouter, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectsPage from "./components/ProjectsPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import PWeb from "./components/PWeb";
import PFilm from "./components/PFilm";
import PPhoto from "./components/PPhoto";


function App() {
  
  function NotFound() {
    const navigate = useNavigate();
  
    useEffect(() => {
      navigate('/');
    }, [navigate]);
  
    return null;
  }

  return (
    <>
   
    
    <BrowserRouter>
   
      <MyNavBar/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/Web" element={<PWeb/>} />
        <Route path="/Filmmaking" element={<PFilm/>} />
        <Route path="/Photography" element={<PPhoto/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>}/>
  
      
      </Routes>
     
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
