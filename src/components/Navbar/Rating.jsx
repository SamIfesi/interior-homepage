const rate = '/assets/icons/rating.svg';
const rateEmpty = '/assets/icons/rating-empty.svg';

export default function Rating() {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(4)].map((_, index) => (
          <img key={index} src={rate} alt="star" />
        ))}
        <span className="half-star-wrapper">
          <img src={rateEmpty} alt="empty star" />
          <img className="half-star" src={rate} alt="half star" />
        </span>
      </div>
      <p>4.5/5 on 22,543 reviews</p>
    </div>
  );
}
