import { useState } from 'react';
import message from '/assets/icons/message.svg';

export default function NewsLetter() {
  const [hasText, setHasText] = useState(false);

  return (
    <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email">Stay in touch</label>
      <p>
        Join our email list to get all the latest news and offers right to your
        inbox.
      </p>
      <div className={`newsletter-input-group${hasText ? ' has-text' : ''}`}>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setHasText(e.target.value.length > 0)}
        />
        <button type="submit">
          <img src={message} alt="message icon" />
        </button>
      </div>
    </form>
  );
}
