import './styles/Navbar.css';
import search from '/assets/icons/search.svg';
import user from '/assets/icons/user.svg';
import bag from '/assets/icons/bag.svg';
import share from '/assets/icons/share.svg'; 
import cert from '/assets/icons/cert.svg'; 
import bus from '/assets/icons/bus.svg'; 
import rate from '/assets/icons/rating.svg'

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <article className="navbar-top">
        <p>
          Can’t see the item you're looking for?{' '}
          <a href="#">Why not ask to have it made!</a>
        </p>
        <ul>
          <li>Help</li>
          <li>GB (£)</li>
          <li>Find a store</li>
          <li>Sign in or register</li>
        </ul>
      </article>

      <div className="">
        <div className="">
          <b>MNMLST</b>
          <ul>
            <li>Sofas & Chairs</li>
            <li>Furniture</li>
            <li>Beds & Bedroom</li>
            <li>Accessories</li>
            <li>Sale</li>
          </ul>
        </div>
        <div className="">
          <img src={search} alt="search icon" />
          <img src={user} alt="user icon" />
          <img src={bag} alt="bag icon" />
        </div>
      </div>

      <div>
        <div className="">
          <ul>
            
            <li>
              <a href="">
                <img src={share} alt="share icon" />
                Free returns within 60 days
              </a>{' '}
            </li>
            <li>
              <a href="">
                <img src={cert} alt="share icon" />5 year warranty
              </a>{' '}
            </li>
            <li>
              <a href="">
                <img src={bus} alt="share icon" />
                Delivery to your room of choice
              </a>{' '}
            </li>
          </ul>
          <div className="">
            <div className="stars">
              <img src={rate} alt="star" />
              <img src={rate} alt="star" />
              <img src={rate} alt="star" />
              <img src={rate} alt="star" />
              <img src={rate} alt="half star" className="half-star" />
            </div>
            <p>4.5/5 on 22,543 reviews</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
