export default function SocialIcons() {
  const socials = [
    { name: 'Facebook', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Pinterest', url: '#' },
  ];

  return (
    <ul className="social-icons">
      {socials.map((social) => (
        <li key={social.name}>
          <a href={social.url} aria-label={social.name}>
            {social.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
