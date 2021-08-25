import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MensCategory } from "./MensCategory";

export const CategoryPage = () => {
  return (
    <div className="category">
      {/* {ctgry.map((item) => {
        <MensCategory item={item} />;
      })} */}

      <h1>Category</h1>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col>
          <Link to="/mens">
            <Button
              variant="outline-info"
              //   onClick={() =>
              //     dispatch({
              //       type: "MENS_CATEGORY",
              //       data: item.category["men's clothing"],
              //     })
              //   }
            >
              Men's clothing
            </Button>
          </Link>
        </Col>
        <Col>
          <Button variant="outline-info">women's clothing</Button>
        </Col>
        <Col>
          <Button variant="outline-info">jewelery</Button>
        </Col>
        <Col>
          <Button variant="outline-info">electronics</Button>
        </Col>
      </Row>
    </div>
  );
};
