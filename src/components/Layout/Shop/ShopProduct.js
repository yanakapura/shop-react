import ShopProductDescription from "./ShopProductDescription";
import ShopProductImage from "./ShopProductImage";

import "./ShopProduct.scss";
import { Link } from "react-router-dom";

const ShopProduct = (props) => {
  return (
    <Link to={`/pages/shop/${props.item.prodId}`} >
      <div className="product-card" key={Math.random()}>
        <ShopProductImage item={props.item} img={props.img} />
        {props.item.name && <ShopProductDescription item={props.item} />}
      </div>
    </Link>
  );
};

export default ShopProduct;
