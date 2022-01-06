import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { ListGroup } from 'react-bootstrap';

export default function Data() {
  let [active, setActive] = useState('');
  let [speed, setSpeed] = useState(0);
  let [movement, setMovement] = useState('');

  const socket = io('https://vroomba-time.herokuapp.com/');

  useEffect(() => {
    socket.on('active', (active) => {
      setActive(active);
    });

    socket.on('speed', (speed) => {
      setSpeed(speed);
    });

    socket.on('movement', (movement) => {
      setMovement(movement);
    });
  });

  return (
    <div>
      <ListGroup className="text-left mb-3">
        <ListGroup.Item variant="dark">Speed: {speed}</ListGroup.Item>
        <ListGroup.Item variant="dark">Movement: {movement}</ListGroup.Item>
        <ListGroup.Item variant="dark">Connection: {active}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
