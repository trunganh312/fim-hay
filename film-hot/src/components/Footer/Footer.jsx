import React from "react";
import { FaGithub, FaFacebook, FaDiscord } from "react-icons/fa";
import "./styles.scss";
function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__text">Copyright byTrun © 2022</div>
      <div className="footer__contact">
        <p>Contact me:</p>
        <div className="footer__icon">
          <a
            className="footer__link"
            target="_blank"
            href="https://github.com/trunganh312/learn-react"
          >
            <FaGithub />
          </a>
          <a
            className="footer__link"
            target="_blank"
            href="https://www.facebook.com/hoang.trongtrung312"
          >
            <FaFacebook />
          </a>
          <a
            className="footer__link"
            target="_blank"
            href="https://discord.com/"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
