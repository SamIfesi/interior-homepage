import '../styles/HeroSection.css';

export default function Button({
  children,
  onSelect,
  type = 'button',
  variant = 'primary',
}) {
  return (
    <button className={`btn btn-${variant}`} type={type} onClick={onSelect}>
      {children}
    </button>
  );
}
