import share from '/assets/icons/share.svg';
import cert from '/assets/icons/cert.svg';
import bus from '/assets/icons/bus.svg';
import Rating from './Rating';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <ul className="trust-items">
        <li>
          <img src={share} alt="" />
          Free returns within 60 days
        </li>
        <li>
          <img src={cert} alt="" />5 year warranty
        </li>
        <li>
          <img src={bus} alt="" />
          Delivery to your room of choice
        </li>
      </ul>

      <Rating />
    </div>
  );
}
