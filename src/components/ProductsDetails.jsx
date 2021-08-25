import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";

// export const ProductDetails = () => {
//   const [selectedProduct, setSelectedProduct] = useState([]);
//   const myProducts = useSelector((state) => state.productReducer.product);
//   const selectedid = useSelector((state) => state.productReducer.selectedid);
//   useEffect(() => {
//     const filteredProd = myProducts.filter((item) => item.id === selectedid[0]);
//     setSelectedProduct([...filteredProd]);
//     console.log("Filtered Products--->", filteredProd);
//   }, [selectedid]);

export const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myProducts = useSelector((state) => state.productReducer.product);
  // const selectedId = useSelector(
  //   (state) => state.productReducer.product.selectedprodid
  // );
  useEffect(() => {
    // console.log(selectedId);
    const filteredProd = myProducts.filter((item) => item.id);
    setSelectedProduct([...filteredProd]);
    console.log(selectedProduct);
  }, [selectedProduct]);

  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>hgjhg</Col>
          <Col md={8}>Description</Col>
          <Link to="/home">
            <Button varient="success">Back</Button>
          </Link>
        </Row>
      </Card>
    </div>
  );
};
