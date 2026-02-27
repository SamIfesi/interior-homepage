import '../styles/Footer.css';
import FooterColumn from './FooterColumn';
import NewsLetter from './NewsLetter';
import SocialIcons from './SocialIcons';
import { footerColumns, termsLinks } from '../Data/Data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h4>Connect with Us</h4>
          <SocialIcons />
          <NewsLetter />
        </div>

        <div className="footer-links">
          {footerColumns.map((item, index) => (
            <FooterColumn key={index} title={item.title} links={item.links} />
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved © MNMLST 2026</p>

        <ul className="legal-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
