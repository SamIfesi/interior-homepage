import Visa from '/assets/icons/Visa.svg';
import Mastercard from '/assets/icons/Mastercard.svg';
import Paypal from '/assets/icons/Paypal.svg';
import Discover from '/assets/icons/Discover.svg';
import Amex from '/assets/icons/Amex.svg';
import Paysecure from '/assets/icons/Paysecure.svg';
import Stripe from '/assets/icons/Stripe-Payments.svg';


export default function Payment() {
  return (
    <div className="payment-container">
      <p>
      <img src={Paysecure} alt="" />
      Payments are secured by Stripe
      </p>
      <img src={Stripe} alt="" />
      <div className="payment-icons">
        <img src={Visa} alt="Visa" />
        <img src={Mastercard} alt="Mastercard" />
        <img src={Paypal} alt="PayPal" />
        <img src={Discover} alt="PayPal" />
        <img src={Amex} alt="PayPal" />
      </div>
    </div>
  );
}
