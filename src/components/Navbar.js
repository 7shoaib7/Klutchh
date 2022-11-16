import React from 'react';
import "./Navbar.css";
import Avatar from "../assets/Avatar.svg";
import Logo from "../assets/Klutchhlogo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
        <img src={Logo} alt="logo"/>
        </div>
        <div className="navMenu">
          <div>
            <span className="navMenuTitle">Home</span>
          </div>
          <div>
            <span className="navMenuTitle">My Matches</span>
          </div>
          <div>
            <span className="navMenuTitle">Leaderboard</span>
          </div>
          <div>
            <span className="navMenuTitle">Fantasy Point System</span>
          </div>
          <div>
            <span className="navMenuTitle">About us</span>
          </div>
          <div>
            <span className="navMenuTitle">FAQs</span>
          </div>
          <div>
            <span className="navMenuTitle">Contact Us</span>
          </div>
        </div>
        <div className="navProfile">
          <div className="profileLogo">
            <img src={Avatar} alt="Avatar"/>
          </div>
          <div>
            <span>Ayushman</span>
          </div>
        </div>
        <div className="navLogout">
         
          <div>
            <p>Log Out</p>
          </div>
        </div>
      </div>
  )
}

export default Navbar