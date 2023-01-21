import {React,useEffect,useState} from 'react';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import './App.css';
import AmdDetails from './AmdDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import ViewPools from './ViewAmbulance';
import ViewAmbulance from './ViewAmbulance';
import Login from './Login';
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>   
    <BrowserRouter>
    <Navbar/>
      <Routes>  
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/ambdetails" element={<AmdDetails/>} />
      <Route exact path="/ambdetails/Mortuary" element={<ViewAmbulance type={"Mortuary"}/>} />
      <Route exact path="/ambdetails//Basic" element={<ViewAmbulance type={"/Basic"}/>} />
      <Route exact path="/ambdetails/Mortuary" element={<ViewAmbulance type={"Mortuary"}/>} />
      <Route exact path="/ambdetails/Advance" element={<ViewAmbulance type={"Advance"}/>} />
      <Route exact path="/ambdetails/Patient" element={<ViewAmbulance type={"Patient"}/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/viewpools" element={<ViewPools/>} />
      
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>      
      </BrowserRouter>
    </>
  );
};

export default App;
