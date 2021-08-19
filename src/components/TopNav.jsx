import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Product.css";

export const TopNav = () => {
  const products = useSelector((state) => state.productReducer.product);
  console.log(products);
  return (
    <Card className="topNav">
      <Row>
        <Col md={10}></Col>
        <Col md={2}>
          <h3>Cart : {products.length}</h3>
        </Col>
      </Row>
    </Card>
  );
};
