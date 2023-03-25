import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__email}>
        <p><a href="mailto:ja.juan.aquino.ja@gmail.com">ja.juan.aquino.ja@gmail.com</a></p>
      </div>
      <div className={styles.footer__links}>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          <img src="/github_white.png" alt="GitHub" width="23" height="24" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          <img src="/linkedIn_logo.png" alt="LinkedIn" width="24" height="24"/>
        </a>
        <a
          href="https://twitter.com/Jaqu_Remix"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footer__link}
        >
          <img src="/twitter.png" alt="Twitter" width="24" height="24"/>
        </a>
      </div>
      <div className={styles.footer__copyright}>
        <p>© 2023 Juan Luis Aquino. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


