import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__navigation">
        <div className="footer__brand">
          <img src={logo} alt="" />
          <p>Savollar va takliflar uchun!</p>
          <p>Ijtimoiy tarmoqlarda bog'laning!</p>
        </div>
        <div className="footer__linkCollection">
          <ul className="footer__links">
            <h3>Menu</h3>
            <li className="footer__link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer__link">
              <Link to="/coursemap">Course map</Link>
            </li>
            <li className="footer__link">
              <Link to="/contact">Contact Info</Link>
            </li>
          </ul>
          <ul className="footer__links">
            <h3>Ijtimoiy tarmoqlarda</h3>
            <li className="footer__link">
              <a rel="noreferrer" target="_blank" href="https://t.me/algoritm_edu/" to="/">Telegram</a>
            </li>
            <li className="footer__link">
              <a rel="noreferrer" target="_blank" href="https://www.instagram.com/algoritm_edu/">Instagram</a>
            </li>
            <li className="footer__link">
              <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCalCUhikk955L4Fxr2I-Qpg">Youtube</a>
            </li>
            <li className="footer__link">
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com/algoritmedu">Facebook</a>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; 2023 Algoritm Ta’lim. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
