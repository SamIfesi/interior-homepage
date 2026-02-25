import '../styles/HeroSection.css';

export default function HeroSection({ data }) {
  return (
    <section className="hero-section">
      <h1 className="hero-title">{data.title}</h1>
      <p className="hero-description">
        {data.description}
      </p>
      <button className="hero-button">{data.buttonText}</button>
    </section>
  );
}
