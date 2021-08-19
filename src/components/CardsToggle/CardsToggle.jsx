import React, { useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./CardsToggle.css";

export const CardsToggle = () => {
  const [colorName, setColorName] = useState("black");
  return (
    <div>
      <Row>
        <Col>
          <Button
            onClick={() =>
              colorName === "Blue"
                ? setColorName("Orange")
                : setColorName("Blue")
            }
          >
            <h1>Test</h1>
          </Button>
          <Card
            className="oddcards"
            // onClick={() =>
            //   (colorName = "white"
            //     ? setColorName("black")
            //     : setColorName("white"))
            // }
            // style={{ background: `${colorName}` }}
          >
            <h1>1</h1>
          </Card>
        </Col>
        <Col>
          <Card className="evencards">
            <h1>2</h1>
          </Card>
        </Col>
        <Col>
          <Card className="oddcards">
            <h1>3</h1>
          </Card>
        </Col>
        <Col>
          <Card className="evencards">
            <h1>4</h1>
          </Card>
        </Col>
        <Col>
          <Card className="oddcards">
            <h1>5</h1>
          </Card>
        </Col>
        <Col>
          <Card className="evencards">
            <h1>6</h1>
          </Card>
        </Col>
        <Col>
          <Card className="oddcards">
            <h1>7</h1>
          </Card>
        </Col>
        <Col>
          <Card className="evencards">
            <h1>8</h1>
          </Card>
        </Col>
        <Col>
          <Card className="oddcards">
            <h1>9</h1>
          </Card>
        </Col>
        <Col>
          <Card className="evencards">
            <h1>10</h1>
          </Card>
        </Col>
        <Col>
          <Card className="oddcards">
            <h1>11</h1>
          </Card>
        </Col>
        <Col>
          <Card className="evencards">
            <h1>12</h1>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
