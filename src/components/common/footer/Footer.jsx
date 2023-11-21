import React from "react";
import "./styles.sass";

const Footer = () => {
  return (
    <footer>
      <div className="footer__navigation__wrapper">
        <div className="footer__navigation__cover">
          <h3>About us</h3>
          <ul>
            <li>About SriLankan Airlines</li>
            <li>Right to Information Act</li>
            <li>Tender and GSA notices</li>
            <li>Advertise with us</li>
            <li>Sri Lanka Tourism</li>
            <li>Media Center</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer__navigation__cover">
          <div>
            <h3>Help</h3>
            <ul>
              <li>24 Hours Contact Center</li>
              <li>Online Chat Support</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="second__nav">
            <h3>SRILANKAN DIRECT CONNECT</h3>
            <ul>
              <li>Agent Registration</li>
            </ul>
          </div>
        </div>
        <div className="footer__navigation__cover">
          <h3>About us</h3>
          <ul>
            <li>MICE</li>
            <li>Cargo</li>
            <li>Training</li>
            <li>Ground Handling</li>
            <li>SriLankan Holidays</li>
            <li>SriLankan Catering</li>
          </ul>
        </div>
        <div className="footer__navigation__cover">
          <h3>TERMS & CONDITIONS</h3>
          <ul>
            <li>Online Booking Terms of Use</li>
            <li>Conditions of Carriage</li>
            <li>Notices For Travel Agents</li>
            <li>Permission Center</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
