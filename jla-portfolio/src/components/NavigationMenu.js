import React, { useEffect } from 'react';
import { Link } from "react-scroll";
import styles from '../styles/NavigationMenu.module.css';

const NavigationMenu = () => {
  return (
    <nav className={styles.links}>
      <ul>
        <li>
          <Link 
          to="home" 
          smooth={true} 
          duration={500}
          activeClass={styles.active}>
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