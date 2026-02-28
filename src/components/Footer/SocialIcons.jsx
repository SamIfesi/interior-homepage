import {socials} from '../Data/Data';
export default function SocialIcons() {
    return (
    <>
      <h3>Connect with Us</h3>

      <ul classicon="social-icons">
        {socials.map((social) => (
          <li key={social.icon}>
            <a href={social.url} aria-label={social.icon}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
