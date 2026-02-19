import search from '/assets/icons/search.svg';
import user from '/assets/icons/user.svg';
import bag from '/assets/icons/bag.svg';

export default function NavActions() {
  return (
    <div className="nav-actions">
      <img src={search} alt="Search" />
      <img src={user} alt="User account" />
      <img src={bag} alt="Shopping bag" />
    </div>
  );
}
