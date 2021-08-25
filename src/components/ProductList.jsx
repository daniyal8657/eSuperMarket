import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import "./Product.css";
import { ProductDetails } from "./ProductsDetails";

export const ProductList = ({ searchTxt, prod, setProd }) => {
  const myProducts = useSelector((state) => state.productReducer.product);

  useEffect(() => {
    if (searchTxt !== "") {
      const filteredProducts = myProducts.filter(
        (item) =>
          item.title.toUpperCase().includes(searchTxt.toUpperCase()) ||
          item.description.toUpperCase().includes(searchTxt.toUpperCase())
      );
      setProd([...filteredProducts]);
    } else {
      return myProducts;
    }
  }, [searchTxt]);

  useEffect(() => {
    setProd([...myProducts]);
  }, [...myProducts]);

  return (
    <Card className="productList">
      <Row>
        {prod.map((item) => (
          <Col md={3}>
            <ProductItem item={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
