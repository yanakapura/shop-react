import "./ShopProductDescription.scss"

const ShopProductDescription = (props) => {
  return (
    <div className="product-card__description">
      <div
        className="product-card__color"
        style={{ backgroundColor: props.item.color }}
      ></div>
      <div>
        <h2 className="product-card__name">{props.item.name}</h2>
        <span className="product-card__price">{props.item.price}</span>
      </div>
    </div>
  );
};

export default ShopProductDescription;
