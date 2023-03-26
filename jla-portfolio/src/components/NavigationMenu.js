import React from 'react';
import { Link } from 'react-scroll';
import styles from '../../styles/NavigationMenu.module.css'
const NavigationMenu = () => {
  return (
    <header className={styles.navigationMenu} aria-label="Main navigation">
      <nav className={styles.links}>
        <ul>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              activeClass={styles.active}
              tabIndex={0}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="files/Resume2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={0}
            >
              Resume
            </a>
          </li>
          <li>
            <a href="mailto:ja.juan.aquino.ja@gmail.com" tabIndex={0}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationMenu;