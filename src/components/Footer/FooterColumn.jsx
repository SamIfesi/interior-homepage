import { FooterLink } from './FooterLink';

export default function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <h3 className="footer-title">{title}</h3>
      <ul>
        {links.map((link, index) => (
          <FooterLink key={index} label={link.label} href={link.href} />
        ))}
      </ul>
    </div>
  );
}
