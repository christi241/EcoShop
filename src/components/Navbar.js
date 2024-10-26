import React from 'react';
import './Navbar.css';
function Navbar() {
    return (
      <nav className="navbar">
        <div className="top-bar">
          <p>Summer Sale for All Swim Suits And Free Express Delivery - OFF 50%!</p>
        </div>
        <div className="menu">
          <h1>Exclusive</h1>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;