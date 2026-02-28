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
        <p>{termsLinks.text}</p>

        <ul className="legal-links">
          {termsLinks.links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
