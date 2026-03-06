import '../styles/ProductCard.css';

const bagIcon = '/assets/icons/bag.svg';
const busIcon = '/assets/icons/bus.svg';

export default function CardCarousel({ product }) {
  const {
    name,
    description,
    originalPrice,
    salePrice,
    isOnSale,
    isNew,
    colours,
    colourCount,
    deliveryWeeks,
    monthlyPayment,
    aprRate,
    aprYears,
    image,
  } = product;

  return (
    <div className="product-card">
      {/* ---- Image + Badges ---- */}
      <div className="product-card-image-wrap">
        <img src={image} alt={name} className="product-card-img" />
        <div className="product-card-badges">
          {isNew && (
            <span className="badge badge-new">
              <img src={bagIcon} alt="" /> New In
            </span>
          )}
          {isOnSale && <span className="badge badge-sale">+ On Sale</span>}
        </div>
      </div>

      {/* ---- Info ---- */}
      <div className="product-card-info">
        {/* Name + Price */}
        <div className="product-card-top">
          <h3 className="product-card-name">{name}</h3>
          <div className="product-card-prices">
            <span className={isOnSale ? 'price-sale' : 'price-regular'}>
              £{salePrice.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="price-original">
                £{originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="product-card-desc">{description}</p>

        {/* Colours + Delivery */}
        <div className="product-card-meta">
          <div className="product-card-colours">
            {colours.slice(0, 4).map((colour, i) => (
              <span
                key={i}
                className="colour-dot"
                style={{ backgroundColor: colour }}
              />
            ))}
            <span className="colour-count">{colourCount} Colours</span>
          </div>
          <div className="product-card-delivery">
            <img src={busIcon} alt="delivery" />
            <span>{deliveryWeeks} week delivery</span>
          </div>
        </div>

        {/* Payment */}
        <p className="product-card-payment">
          £{monthlyPayment} per month APR {aprRate}% over {aprYears} years
        </p>
      </div>
    </div>
  );
}
