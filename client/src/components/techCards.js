import React from 'react';
import { Card, Col } from 'react-bootstrap';

function TechCards(props) {
  return (
    <Col>
      <Card className="border-0 grid-item d-flex bg-dark flex-row text-center">
        <Card.Body>
          <Card.Title>
            <h1>{props.icon}</h1>
          </Card.Title>
          <Card.Text>{props.name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TechCards;
