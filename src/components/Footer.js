import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiTwitter, SiLinkedin } from 'react-icons/si';

function Footer() {
  return (
    <footer className="w-100 mt-auto bg-dark p-3 footer fixed-bottom">
      <div className="container text-light justify-content-center d-flex gap-4">
        <a
          href="https://github.com/spaceboundbear"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h4>
            <AiFillGithub />
          </h4>
        </a>

        <a
          href="https://twitter.com/spaceboundbear"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h4>
            <SiTwitter />
          </h4>
        </a>
        <a
          href="https://linkedin.com/in/michael-fischer-webdev/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h4>
            <SiLinkedin />
          </h4>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
