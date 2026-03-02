import { useState } from 'react';
import { review } from '../Data/Data';
import Rating from '../Navbar/Rating';
import '../styles/CustomerReviews.css';

const chevronLeft = '/assets/icons/chevron_left.svg';
const chevronRight = '/assets/icons/chevron_right.svg';

export default function CustomerReviews() {
  const {  subtitle, title, quote } = review[0];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {};
  const handleNext = () => {};

  return (
    <section className="customer-reviews">
      {/* ---- Header ---- */}
      <p className="reviews-subtitle">{ subtitle}</p>
      <h2 className="reviews-title">{title}</h2>

      {/* ---- Quote card ---- */}
      <div className="reviews-quote">
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