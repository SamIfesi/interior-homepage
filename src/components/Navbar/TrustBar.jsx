import share from '/assets/icons/share.svg';
import cert from '/assets/icons/cert.svg';
import bus from '/assets/icons/bus.svg';
import Rating from './Rating';
import { trustBarData } from '../Data/Data';
import '../styles/TrustBar.css';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <ul className="trust-items">
        {trustBarData.map((item, index) => (
          <li key={index}>
            <img src={index === 0 ? share : index === 1 ? cert : bus} alt="" />
            {item}
          </li>
        ))}
      </ul>

      <Rating />
    </div>
  );
}
