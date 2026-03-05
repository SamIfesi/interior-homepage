import { useState } from 'react';
import Rating from '../Navbar/Rating';
import '../styles/CustomerReviews.css';

const chevronLeft = '/assets/icons/chevron_left.svg';
const chevronRight = '/assets/icons/chevron_right.svg';

export default function CustomerReviews({ data }) {
  const { subtitle, title, quote } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev === 0 ? quote.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev === quote.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="customer-reviews">
      {/* ---- Header ---- */}
      <p className="reviews-subtitle">{subtitle}</p>
      <h2 className="reviews-title">{title}</h2>

      {/* ---- Quote card ---- */}
      <div key={currentIndex} className={`reviews-quote slide-${direction}`}>
        <p className="reviews-text">&ldquo;{quote[currentIndex].text}&rdquo;</p>
        <h4 className="reviews-author">{quote[currentIndex].author}</h4>
        <Rating />
      </div>

      {/* ---- Navigation controls ---- */}
      <div className="reviews-nav">
        <button className="reviews-arrow" onClick={handlePrev}>
          <img src={chevronLeft} alt="Previous review" />
        </button>

        <div className="reviews-dots">
          {quote.map((_, index) => (
            <span
              key={index}
              className={`reviews-dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        <button className="reviews-arrow" onClick={handleNext}>
          <img src={chevronRight} alt="Next review" />
        </button>
      </div>
    </section>
  );
}
