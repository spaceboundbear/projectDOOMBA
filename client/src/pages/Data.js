import { Container, Card, ListGroup } from 'react-bootstrap';
import React from 'react';

function Data() {
  return (
    <Container className="w-75">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <h1 className="m-3 text-center font-weight-bold">DATA</h1>
          <ListGroup className="text-center">
            <ListGroup.Item variant="dark">
              Multiple Socket Clients
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              Integrating SerialPort with rPi
            </ListGroup.Item>
            <ListGroup.Item variant="dark">Live View Camera</ListGroup.Item>
            <ListGroup.Item variant="dark">Fully Wireless Setup</ListGroup.Item>
            <ListGroup.Item variant="dark">
              Combining SocketIO, React, and Apollo
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Data;
