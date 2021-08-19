import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { ProductItem } from "./ProductItem";
import "./Product.css";

export const ProductList = () => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prod, setProd] = useState([...myProducts]);

  return (
    <Card className="productList">
      <Row>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
      </Row>
    </Card>
  );
};
