import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Tour</h1>
          <p>Choose your favorite destination</p>
        </div>
        <div>
          <FaFacebookSquare className="icon" />
          <FaInstagramSquare className="icon" />
          <FaTwitterSquare className="icon" />
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <Link to="/">ChangeLog</Link>
          <Link to="/">Status</Link>
          <Link to="/">License</Link>
          <Link to="/">All Versions</Link>
        </div>
        <div>
          <h4>Community</h4>
          <Link to="/">Github</Link>
          <Link to="/">Issues</Link>
          <Link to="/">Project</Link>
          <Link to="/">Twitter</Link>
        </div>
        <div>
          <h4>Help</h4>
          <Link to="/">Support</Link>
          <Link to="/">Troubleshooting</Link>
          <Link to="/">Contact</Link>
        </div>
        <div>
          <h4>Other</h4>
          <Link to="/">Terms of service</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Policy</Link>
          <Link to="/">License</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
