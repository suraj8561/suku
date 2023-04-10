import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "../Item/Item";

const productsArr = [
  {
    id: "P1",
    title: "Colors",
    price: 100.50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "P2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "P3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "P4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const Product = () => {
  return (
 
      <Container>
        <Row>
          {productsArr.map((item) => (
            <Col md={6} key={item.id}>
              <Item
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl} 
              />
            </Col>
          ))}
        </Row>
      </Container>
   
  );
};
export default Product;
