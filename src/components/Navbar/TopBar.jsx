export default function TopBar() {
  return (
    <div className="navbar-top">
      <p>
        Can’t see the item you're looking for?{' '}
        <a href="#">Why not ask to have it made!</a>
      </p>

      <ul className="top-links">
        <li>Help</li>
        <li>GB (£)</li>
        <li>Find a store</li>
        <li>Sign in or register</li>
      </ul>
    </div>
  );
}
