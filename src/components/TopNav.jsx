import React from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Home } from "./Home";
import "./Product.css";

export const TopNav = ({ setSearchTxt }) => {
  const products = useSelector((state) => state.productReducer.product);
  // console.log(products);
  // useEffect(() => {
  //   console.log("search Text---->", searchTxt);
  // }, [searchTxt]);
  return (
    <div>
      <Card className="topNav">
        <Row>
          <Col className="navhead" md={7}>
            <b>The eSuper-Market</b>
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              onChange={(e) => setSearchTxt(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <h3>Cart : {products.length}</h3>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
