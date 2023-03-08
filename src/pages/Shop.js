import "./Shop.scss";
import { useEffect, useState } from "react";
import ShopProduct from "../components/Layout/Shop/ShopProduct";
import useHttp from "../hooks/use-http";
import { getAllProducts } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Shop = () => {

  const {
    sendRequest,
    status,
    data: productsData,
    error,
  } = useHttp(getAllProducts, true);

  useEffect(()=>{
    sendRequest()
  },[])

  
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
  
  if (status === "completed" && (!productsData || productsData.length === 0)) {
    return <p className="">No Product found!</p>;
  }
  
  const shopContent = productsData.map((item) => (
    <ShopProduct item={item} key={Math.random()} img={item.images[0]}/>
  ));

  return (
    <>
      <section className="shop">
        <div className="shop__title">
          <h1>Shop</h1>
        </div>
        <div className="shop__content">{shopContent}</div>
      </section>
    </>
  );
};

export default Shop;
