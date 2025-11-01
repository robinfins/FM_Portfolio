import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-part"><strong>F</strong></span>
              <span className="footer-logo-part"><strong>INSADAL</strong></span>
              <span className="footer-logo-part"> </span>
              <span className="footer-logo-part">M</span>
              <span className="footer-logo-part">EDIA</span>
            </div>
            <p>Creating compelling visual stories that elevate brands</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
              <li><a onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</a></li>
              <li><a onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</a></li>
              <li><a onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</a></li>
              <li><a onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/finsadalmedia/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/FinsadalMedia/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://linkedin.com/company/finsadalmedia/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Finsadal Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
