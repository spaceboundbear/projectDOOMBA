import { React, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { Card, Button, Row, Col, Image } from 'react-bootstrap';

function RobotButtons() {
  const [newSocket, setSocket] = useState(null);
  const socket = io(`http://localhost:3001`);
  console.log(newSocket);

  window.addEventListener(
    'keydown',
    (event) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          socket.emit('move', 'backward');
          console.log('arrow down press');
          break;
        case 'ArrowUp':
          socket.emit('move', 'forward');
          console.log('arrow up press');
          break;
        case 'ArrowLeft':
          socket.emit('move', 'left');
          console.log('arrow left press');
          break;
        case 'ArrowRight':
          socket.emit('move', 'right');
          console.log('arrow right press');
          break;
        default:
          return;
      }
      event.preventDefault();
    },
    true
  );

  window.addEventListener(
    'keyup',
    (event) => {
      if (event.defaultPrevented) {
        return;
      }
      socket.emit('move', 'stop');
      event.preventDefault();
    },
    true
  );

  function Forward() {
    socket.emit('move', 'forward');
    console.log('forward command emitted');
  }

  function Stop() {
    socket.emit('move', 'stop');
    console.log('stop command emitted');
  }

  function Backward() {
    socket.emit('move', 'backward');
    console.log('backward command emitted');
  }

  function Left() {
    socket.emit('move', 'left');
    console.log('left command emitted');
  }

  function Right() {
    socket.emit('move', 'right');
    console.log('right command emitted');
  }

  useEffect(() => {
    const socket = io(`http://localhost:3001`);
    setSocket(socket);
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED');
    });

    return () => socket.close();
  }, [setSocket]);

  return (
    <>
      <Card className="drive-buttons bg-secondary buttons container text-center col-sm-8">
        <img
          className="mt-3"
          src="http://70.121.160.191:8080/?action=stream"
        ></img>
        <Row className="">
          <Col className="">
            <Button
              size="lg"
              className="m-3 btn btn-dark col-sm-3"
              onClick={Forward}
            >
              FORWARD
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              size="lg"
              className="m-2 btn btn-dark col-sm-2"
              onClick={Left}
            >
              LEFT
            </Button>
            <Button
              size="lg"
              className="m-2 btn btn-danger col-sm-2"
              onClick={Stop}
            >
              STOP
            </Button>
            <Button
              size="lg"
              className="m-2 btn btn-dark col-sm-2"
              onClick={Right}
            >
              RIGHT
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              size="lg"
              className="m-3 btn btn-dark col-sm-3"
              onClick={Backward}
            >
              BACKWARD
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default RobotButtons;
