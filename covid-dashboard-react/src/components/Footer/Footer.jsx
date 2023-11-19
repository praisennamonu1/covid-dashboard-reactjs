import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          &copy; {new Date().getFullYear()} Praise Nnamonu
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/praise-nnamonu" className="fab fa-linkedin"></a>
          <a href="https://instagram.com/praisennamonu" className="fab fa-instagram"></a>
          <a href="https://twitter.com/praisennamonu" className="fab fa-twitter"></a>
          <a href="https://facebook.com/praisennamonu" className="fab fa-facebook"></a>
          <a href="mailto:praise.nnamonu@kibo.school" className="fas fa-at"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;