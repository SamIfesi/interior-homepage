const chevronLeft = '/assets/icons/chevron_left.svg';
const chevronRight = '/assets/icons/chevron_right.svg';
import './CarouselNav.css';

export default function CarouselNav({ onPrev, onNext, currentIndex, total }) {
  return (
    <div className="reviews-nav">
      <button className="reviews-arrow" onClick={onPrev}>
        <img src={chevronLeft} alt="Previous" />
      </button>

      <div className="reviews-dots">
        {[...Array(total)].map((_, index) => (
          <span
            key={index}
            className={`reviews-dot ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <button className="reviews-arrow" onClick={onNext}>
        <img src={chevronRight} alt="Next" />
      </button>
    </div>
  );
}
