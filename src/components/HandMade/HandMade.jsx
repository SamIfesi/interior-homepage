import '../styles/HandMade.css';

export default function HandMade({ data }) {
  const { subtitle, title, text } = data;

  return (
    <section className="handmade">
      <p className="handmade-subtitle">{subtitle}</p>
      <h2 className="handmade-title">{title}</h2>
      <p className="handmade-text">{text}</p>
    </section>
  );
}
