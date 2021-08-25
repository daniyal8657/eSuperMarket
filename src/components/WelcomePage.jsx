import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to David's Store</h1>
      <br />
      <Link to="/category">
        <Button variant="outline-info">Start Shopping</Button>
      </Link>
    </div>
  );
};
