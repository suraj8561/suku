import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Item = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h5 className="text-primary">{props.title}</h5>
          <img
            src={props.imageUrl}
            alt={props.name}
            variant="top"
            className="mb-2"
          />
          <span>{price}</span>
          <button className="float-end mb-5 btn btn-info border 0px text-light">
            Add to Cart
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
