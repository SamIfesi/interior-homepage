import NavLinks from './NavLinks';
import NavActions from './NavActions';

export default function MainNav() {
  return (
    <div className="main-nav">
      <b className="logo">MNMLST</b>
      <NavLinks />
      <NavActions />
    </div>
  );
}
