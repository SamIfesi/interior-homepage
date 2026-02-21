import NavLinks from './NavLinks';
import NavActions from './NavActions';
import '../styles/MainNav.css';


export default function MainNav() {
  return (
    <div className="main-nav">
      <b className="logo">MNMLST</b>
      <NavLinks />
      <NavActions />
    </div>
  );
}
