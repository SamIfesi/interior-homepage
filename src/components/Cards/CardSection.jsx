import Card from '../ui/CardCarousel';

export default function CardSection({ products }) {
  return (
    <section className="card-section">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
    </section>
  );
}