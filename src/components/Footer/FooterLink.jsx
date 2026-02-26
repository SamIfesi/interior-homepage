export default function FooterLink({ label, href = '#' }) {
  return (
    <li className="footer-link">
      <a href={href}>{label}</a>
    </li>
  );
}
