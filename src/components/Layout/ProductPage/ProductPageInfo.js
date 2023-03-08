import ProductPageForm from "./ProductPageForm";
import "./ProductPageInfo.scss";

const ProductPageInfo = (props) => {
  return (
    <div className="product-section__info info">
      <h1 className="info__name">{props.item.name}</h1>
      <div className="info__price">{props.item.price}</div>
      <p className="info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam esse
        dicta eaque aut, tempore ipsum impedit soluta non laboriosam aspernatur
        asperiores eos. Vitae veritatis praesentium alias ipsa earum incidunt
        exercitationem!
      </p>
      <ProductPageForm item={props.item}/>
    </div>
  );
};

export default ProductPageInfo;
