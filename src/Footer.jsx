import React from "react";
import { links, social } from "./dataNavbar";
import logo from "./lotus.png";

function Footer() {
  return (

  
    <nav>
      
      <div className="nav-center">
        
        
            <div className="nav-center">
            <a href="#top">
                <img src={logo} className="logo" alt="logo" />
            </a>
            <button className="nav-toggle"></button>
            </div>

            <ul className="links">
            {links.map((link) => {
                const { id, url, text } = link;
                return (
                <li key={id}>
                    <a href={url}>{text}</a>
                </li>
                );
            })}
            </ul>

            <ul className="nav-center social-icons">
            {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
                );
            })}
            </ul>
      </div>

    </nav>

  );
}

export default Footer;
