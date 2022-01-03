import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { ListGroup } from 'react-bootstrap';

export default function Data() {
  let [bumpCount, setBumpCount] = useState(0);
  let [speed, setSpeed] = useState(0);
  let [angle, setAngle] = useState(0);

  const socket = io(`http://localhost:3000`);

  useEffect(() => {
    socket.on('bumpLeft', () => {
      setBumpCount(bumpCount + 1);
    });

    socket.on('bumpRight', () => {
      setBumpCount(bumpCount + 1);
    });

    socket.on('speed', (data) => {
      speed = setSpeed(data);
    });

    socket.on('angle', (data) => {
      angle = setAngle(data);
    });
  });

  return (
    <div>
      <ListGroup className="text-left mb-3">
        <ListGroup.Item variant="dark">Speed: {speed}</ListGroup.Item>
        <ListGroup.Item variant="dark">Angle: {angle}</ListGroup.Item>
        <ListGroup.Item variant="dark">Bump Count: {bumpCount}</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
