import React from "react";
import { useDispatch } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./Product.css";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <Card className="btns">
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
                data: ["Santoor Soap", "Tata Namak"],
              })
            }
          >
            +
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
