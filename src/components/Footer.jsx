import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2>PLANEDGE <span>ARCHITECT</span></h2>
          <p>Innovative Architecture with an Indian Soul</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <FiMapPin />
            <span>Ranchi, Jharkhand, India</span>
          </div>
          <div className="contact-item">
            <FiPhone />
            <span>9971189665</span>
          </div>
          <div className="contact-item">
            <FiMail />
            <span>info@planedgearchitect.com</span>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><FiInstagram size={24} /></a>
            <a href="#" aria-label="Facebook"><FiFacebook size={24} /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Planedge Architect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
