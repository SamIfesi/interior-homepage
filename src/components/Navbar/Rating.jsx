import rate from '/assets/icons/rating.svg';

export default function Rating() {
  return (
    <div className="rating">
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <img key={index} src={rate} alt="star" />
        ))}
      </div>
      <p>4.5/5 on 22,543 reviews</p>
    </div>
  );
}
