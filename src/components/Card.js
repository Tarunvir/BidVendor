import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductCard = ({product}) => {
  return (
    <div>
      <Card style={{maxWidth:"300px"}}>
        <CardImg style={{objectFit:"cover",height:"200px"}}  top width="100%" src={product.cardImg} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{product.cardTitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{product.cardSub}</CardSubtitle>
          <CardText>{product.cardText}</CardText>
          <Button>Place new Bid</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProductCard;