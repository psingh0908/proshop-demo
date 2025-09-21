import {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import products from "../products";
import Rating from '../components/Rating';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import axios from 'axios';

const ProductScreen = () => {
  const [product, setProduct] = useState({});

  const { id: productId } = useParams();

  useEffect(() => {

    const fetchProduct = async() => {

      const {data} = await axios.get(`/api/products/${productId}`)
      setProduct(data);
    }

    fetchProduct();
  }, [productId])

  return (
    <>
      <Link className="btn btn-light my3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
        <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={4}>
        <ListGroup variant="flush">
          <ListGroupItem>
            <h3>{product.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
          </ListGroupItem>
          <ListGroupItem>
            Price: ${product.price}
          </ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  );
};

export default ProductScreen;
