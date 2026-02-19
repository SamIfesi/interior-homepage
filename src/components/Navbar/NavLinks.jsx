const links = [
  'Sofas & Chairs',
  'Furniture',
  'Beds & Bedroom',
  'Accessories',
  'Sale'
];

export default function NavLinks() {
  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  );
}
