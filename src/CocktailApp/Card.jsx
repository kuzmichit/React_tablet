import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";
import img from './Slides/2x8thr1504816928.jpg';


export default (props) => {
  
  const {src, title, text} = props
  
  return (
    <Card>
      <Card.Img variant="top" src={src} className='img' alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
