export default function NewsLetter() {
  return (
    <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email">Subscribe to our newsletter</label>
      <div className="newsletter-input-group">
        <input
          id="newsletter-email"
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit">Subscribe</button>
      </div>
    </form>
  );
}
