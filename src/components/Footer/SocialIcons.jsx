import {socials} from '../Data/Data';
export default function SocialIcons() {
    return (
      <>
        <h3>Connect with Us</h3>

        <ul className="social-icons">
          {socials.map((social) => (
            <li key={social.icon}>
              <a href={social.url} aria-label={social.alt}>
                <img src={social.icon} alt={social.alt} />
              </a>
            </li>
          ))}
        </ul>
      </>
    );
}
