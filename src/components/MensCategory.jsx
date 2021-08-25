import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Card, Row, Col, Button, Form, Nav } from "react-bootstrap";
import "./Product.css";

export const MensCategory = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Men's Clothing</h1>
      {/* <Card className="prodcard">
        <Row>
          <Form.Label
            style={{
              background: "#1C1427",
              color: "#CCFFBD",
            }}
          ></Form.Label>
        </Row>
        <Row>
          <Card.Img src={item.image} height="250px" width="150px" />
          <i>{item.title}</i>
        </Row>
        <Row>
          <p>
            <b>{item.price} $ </b>
          </p>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() =>
                dispatch({
                  type: "REMOVE_PRODUCT",
                  data: [],
                })
              }
            >
              -
            </Button>
          </Col>
          <Col>
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_PRODUCT",
                  data: [],
                })
              }
            >
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Link to="/productDetails">
            <Button
              onClick={() =>
                dispatch({
                  type: "SELECTED_PROD_ID",
                  data: item.id,
                })
              }
            >
              View
            </Button>
          </Link>
        </Row>
      </Card> */}
    </div>
  );
};
