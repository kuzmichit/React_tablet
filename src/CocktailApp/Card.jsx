import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';
import React from "react";


export default (props) => {
  
  const {id, src, title='', text=''} = props
  
  return (
    <Card 
      className='card'>
      <Card.Img variant="top" src={src} alt={'Imagine di ' + title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
