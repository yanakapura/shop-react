import { useState } from "react";
import "./ProductPageGallery.scss";

const ProductPageGallery = (props) => {

  const [activeImage, setActiveImage] = useState(0)

  const imageClickHandler = (e) => {
    setActiveImage(+e.target.id)
  };

  return (
    <div className="product-section__gallery gallery">
      <div className="gallery__images">
        <ul>
          {props.item.images.map((img, id) => (
            <li
              className="gallery__image"
              key={id}
              onClick={imageClickHandler}
              >
              <img src={img} id={id}/>
            </li>
          ))}
        </ul>
      </div>
      <div className="gallery__image-main">
        <img src={props.item.images[activeImage]} />
      </div>
    </div>
  );
};

export default ProductPageGallery;
