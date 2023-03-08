import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
import Button from "../../UI/Button";
import InputNumber from "../../UI/InputNumber";
import RadioBtn from "../../UI/RadioBtn";

import "./ProductPageForm.scss";

const ProductPageForm = (props) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState();
  const [error, setError] = useState(false);

  const amountInputRef = useRef();

  const addItemToCartHandler = (e) => {
    e.preventDefault();

    if (!selectedSize) {
      setError(true);
      return;
    }

    dispatch(
      cartActions.addItemToCart({
        id: props.item.id,
        title: props.item.name,
        price: props.item.price,
        sizes: selectedSize,
        quantity: +amountInputRef.current.value,
      })
    );
  };

  const sizeInputsChangeHandler = (e) => {
    setSelectedSize(e.target.value);
    setError(false);
  };

  const sizeInputs = props.item.sizes.map((size, index) => (
    <RadioBtn
      className={selectedSize === size && "checked"}
      name="sizes"
      value={size}
      id={"radio-" + ++index}
      key={Math.random()}
      onChange={sizeInputsChangeHandler}
      error={error}
    >
      {size}
    </RadioBtn>
  ));

  return (
    <form className="product-section__form form">
      <InputNumber min={1} max={100} defaultValue={1} ref={amountInputRef} />
      <div className="form__colors"></div>
      <div className="form__sizes">{props.item.sizes && sizeInputs}</div>
      {error && <p className="error">Select any size!</p>}
      <Button className="btn-dark form__button" onClick={addItemToCartHandler}>
        Add to cart
      </Button>
    </form>
  );
};

export default ProductPageForm;
