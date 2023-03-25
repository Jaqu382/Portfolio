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
          <Link 
          to="skills" 
          smooth={true} 
          duration={500}
          activeClass="active">
            Skills
          </Link>
        </li>
        <li>
          <Link 
          to="projects" 
          smooth={true} 
          duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link 
          to="resume" 
          smooth={true} 
          duration={500}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default NavigationMenu;  