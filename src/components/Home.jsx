import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router";
import { ProductList } from "./ProductList";
import { getProducts } from "../service/products";
import { ProductDetails } from "./ProductsDetails";
import { TopNav } from "./TopNav";

export const Home = ({ prod, setProd }) => {
  const [searchTxt, setSearchTxt] = useState("");
  const dispatch = useDispatch();
  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div className="mainPage">
      <TopNav setSearchTxt={setSearchTxt} />
      <ProductList searchTxt={searchTxt} prod={prod} setProd={setProd} />
      {/* {prod.map((item) => (
        <ProductDetails details={item} />
      ))} */}
    </div>
  );
};
