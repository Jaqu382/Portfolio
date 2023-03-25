import React, { useEffect } from 'react';
import { Link } from "react-scroll";

const NavigationMenu = () => {
  return (
    <nav className="links">
      <ul>
        <li>
          <Link 
          to="home" 
          smooth={true} 
          duration={500}
          activeClass="active">
            Home
          </Link>
        </li> 
        <li>
          <a href="/Resume2023.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li>
          <a href="mailto:ja.juan.aquino.ja@gmail.com">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;