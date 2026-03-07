import Card from '../ui/CardCarousel';
import CarouselNav from '../ui/CarouselNav';

export default function CardSection({ products }) {
  return (
    <section className="card-section">
      <h2 className="card-title">Explore our latest collection</h2>
      <div className="card-container">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
      {/* <CarouselNav onPrev={handlePrev} onNext={handleNext} /> */}
      <CarouselNav />
    </section>
  );
}
