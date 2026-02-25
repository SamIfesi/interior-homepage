import { topBarData } from '../Data/Data';
import '../styles/Navtop.css';

export default function TopBar() {
  return (
    <div className="navbar-top">
      <p>
        {topBarData.text}
        <a href="#">{topBarData.linkText}</a>
      </p>

      <ul className="top-links">
        {topBarData.links.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
