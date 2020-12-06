import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const ProductCard = ({ product }) => {
  return (
    <div style={{ textDecoration: "none" }}>
      <Card style={{ maxWidth: "300px" }}>
        <CardImg
          style={{ objectFit: "cover", height: "200px" }}
          top
          width="100%"
          src={product.cardImg}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {product.description}
          </CardSubtitle>
          <CardText>{product.currentBid}$</CardText>
          <Button color="info">Bid up!</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;
