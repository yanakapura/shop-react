import Button from "../../UI/Button";
import "./ShopProductImage.scss";

const ShopProductImage = (props) => {

  
  
  return (
    <div className="product-card__image">
      <img src={props.img} />
      <div
        className={`product-card__image-overflow ${props.item.name && "active"}`}
        style={{ backgroundColor: props.item.color }}
      >
        <Button className="btn-light product-card__btn">Add to cart</Button>
      </div>
    </div>
  );
};

export default ShopProductImage;
