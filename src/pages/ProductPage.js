import "./ProductPage.scss";
import ProductPageGallery from "../components/Layout/ProductPage/ProductPageGallery";
import ProductPageInfo from "../components/Layout/ProductPage/ProductPageInfo";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleProduct } from "../lib/api";
import { useParams } from "react-router-dom";

const ProductPage = (props) => {
  const {
    sendRequest,
    status,
    data: loadedProduct,
    error,
  } = useHttp(getSingleProduct, true);

  const { id } = useParams();

  useEffect(() => {
    sendRequest(id);
  }, []);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="">{error}</p>;
  }

  if (status === "completed" && !loadedProduct) {
    return <p className="">No Product found!</p>;
  }

  return (
    <section className="product-section">
      <ProductPageGallery item={loadedProduct} />
      <ProductPageInfo item={loadedProduct} />
    </section>
  );
};

export default ProductPage;
