import NavLinks from './NavLinks';
import NavActions from './NavActions';
import '../styles/MainNav.css';


export default function MainNav() {
  return (
    <div className="main-nav">
      <h1 className="logo">MNMLST</h1>
      <NavLinks />
      <NavActions />
    </div>
  );
}
