import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Alert } from "@mui/material";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-section">
            <h2 className="footer-title">About Us</h2>
            <p className="footer-text">
              We are a tech news and reviews site dedicated to providing you
              with the latest and most accurate information about technology and
              gadgets.
            </p>
          </div>
          <div className="footer-section">
            <h2 className="footer-title">Quick Links</h2>
            <ul className="footer-links">
              <li>
                {JSON.parse(localStorage.getItem("loged")) ? (
                  <NavLink to="/review-edit" className="footer-link">
                    Update Review
                  </NavLink>
                ) : (
                  <NavLink
                    to=""
                    className="footer-link"
                    onClick={() => {
                      window.alert("You should sign-in to submit a review");
                    }}
                  >
                    Update Review
                  </NavLink>
                )}
              </li>
              <li>
                {JSON.parse(localStorage.getItem("loged")) ? (
                  <NavLink to="/edit" className="footer-link">
                    Submit Article
                  </NavLink>
                ) : (
                  <NavLink
                    to=" "
                    className="footer-link"
                    onClick={() => {
                      window.alert("You should sign-in to submit a NEWS");
                    }}
                  >
                    Submit Article
                  </NavLink>
                )}
              </li>
              <li>
                {!JSON.parse(localStorage.getItem("loged")) ? (
                  <NavLink to="/login" className="footer-link">
                    Login
                  </NavLink>
                ) : (
                  <NavLink
                    to="#"
                    className="footer-link"
                    onClick={() => {
                      localStorage.setItem("loged", false);
                    }}
                  >
                    Logout
                  </NavLink>
                )}
              </li>
              <li>
                <NavLink to="/signup" className="footer-link">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="footer-link">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className="footer-link">
                  Terms of Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-social">
            <a
              href="https://facebook.com"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="footer-contact">
            <h2 className="footer-title">Contact Us</h2>
            <p className="footer-text">
              For inquiries, please email us at{" "}
              <a href="mailto:info@techsite.com" className="footer-link">
                info@techsite.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
