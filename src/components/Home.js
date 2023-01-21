import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const home = ({automation}) => {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
     <header>
        <div className=" top-nav">
            <div className="s-icons">
                <i className="fa fa-facebook" ></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-whatsapp"></i>
                <i className="fa fa-google"></i>
            </div>
            <div className="contact">
                Contact : 99999999999
            </div>
        </div>
        <nav className='l'>
                <div className="logo">
                    Ambulance
                </div>
        </nav>
        <div className="container">
            <div className="left">
            <h1>
            <span>We Provide .</span>
                  Efficient And Immediate <span>Ambulance Services</span></h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam dignissimos enim pariatur, 
                    ex praesentium aliquam officiis id ea, repudiandae dicta, iure animi fuga nostrum beatae tempora harum aspernatur. Ad!</h5>
                {/* <button className='btn1'>Emergency Booking</button> */}
                <button  onClick={() => loginWithRedirect()} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Emergency</button>
            </div>
            <div className="right">
                <div className="imgauto">

                </div>
            </div>
        </div>
        
    </header>
    </>
  )
}

export default home;
