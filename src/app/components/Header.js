import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link} from 'react-router-dom';


const Header = () => (
  <header>
    <section className="main-nav side-menu">
      <div className="logo">
        <a href="/">
          <svg className="logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 7.1 13.8">
            <path id="XMLID_7_" className="st0" d="M5.9,7.7c0.7-0.6,1.2-1.6,1.2-2.6c0-1-0.4-1.9-1.1-2.6C6.6,1.9,7,1,7,0v0L5.1,0c0,0.8-0.6,1.5-1.4,1.6c-0.1,0-0.1,0-0.2,0v0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0h0v0C1.6,1.6,0,3.2,0,5.1c0,0,0,0,0,0C0,7,1.5,8.6,3.5,8.7v0h0.1c0.9,0,1.5,0.7,1.5,1.6l0,0h0v0c0,0.4-0.2,0.8-0.5,1.1c-0.3,0.3-0.7,0.5-1.1,0.5h0v0c0,0,0,0,0,0c-0.5,0-0.9-0.2-1.2-0.6l-1.4,1.4c0.6,0.7,1.6,1.1,2.6,1.1c1,0,1.9-0.4,2.5-1c0.6-0.6,1-1.5,1-2.5C7,9.3,6.6,8.4,5.9,7.7z M2,5.1C2,5.1,2,5.1,2,5.1c0-0.9,0.7-1.5,1.5-1.6v0c0,0,0,0,0,0c0.1,0,0.1,0,0.2,0c0.8,0.1,1.5,0.8,1.5,1.6c0,0.9-0.7,1.6-1.6,1.6C2.7,6.7,2,6,2,5.1z"/>
          </svg>
        </a>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li className="hire-us"><Link to="/hire-me">Let's Chat!</Link></li>
        </ul>
      </nav>
    </section>
  </header>
)

module.exports = Header;
