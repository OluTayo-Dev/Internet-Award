import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Internet Awards</h3>
          <p>Celebrating excellence on the internet.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#nominees">Nominees</a></li>
            <li><a href="#vote">Vote</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@internetawards.com</p>
          <p>Phone: +234-000-123-4567</p>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><span>🌐</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>📘</span></a>
            <a href="#"><span>📸</span></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Internet Awards. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
