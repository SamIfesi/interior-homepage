import TopBar from './TopBar';
import MainNav from './MainNav';
import TrustBar from './TrustBar';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <TopBar />
      <MainNav />
      <TrustBar />
    </nav>
  );
}
