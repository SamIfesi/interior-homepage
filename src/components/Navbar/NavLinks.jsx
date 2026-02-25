import { navLinkData } from '../Data/Data';

export default function NavLinks() {
  return (
    <ul className="nav-links">
      {navLinkData.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
}
