import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Data({ movement, speed, connection }) {
  console.log('re-render');

  return (
    <div>
      <ListGroup className="text-left mb-3">
        <ListGroup.Item variant="dark">Speed: {speed}</ListGroup.Item>
        <ListGroup.Item variant="dark">Movement: {movement}</ListGroup.Item>
        <ListGroup.Item variant="dark">Connection: {connection}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
