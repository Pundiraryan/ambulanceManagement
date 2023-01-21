import {React,useEffect,useState} from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import './App.css';
import AmdDetails from './AmdDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ViewPools from './ViewAmbulance';

const App = () => {
  
  return (
    <>   
    <BrowserRouter>
    <Navbar/>
      <Routes>  
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/ambdetails" element={<AmdDetails/>} />
    
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/viewpools" element={<ViewPools/>} />
      
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>      
      </BrowserRouter>
    </>
  );
};

export default App;
