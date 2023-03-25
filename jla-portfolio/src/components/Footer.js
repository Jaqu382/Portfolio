import React from 'react';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__email'>
        <p><a href="mailto:ja.juan.aquino.ja@gmail.com">ja.juan.aquino.ja@gmail.com</a></p>
      </div>
      <div className='footer__links'>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className= 'footer__link'
        >
          <img src="/github_white.png" alt="GitHub" width="30" height="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className='footer__link'
        >
          <img src="/linkedIn_logo.png" alt="LinkedIn" width="30" height="30"/>
        </a>
        <a
          href="https://twitter.com/Jaqu_Remix"
          target="_blank"
          rel="noopener noreferrer"
          className='footer__link'
        >
          <img src="/twitter.png" alt="Twitter" width="30" height="30"/>
        </a>
      </div>
      <div className='footer__copyright'>
        <p>© 2023 Juan Luis Aquino. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



