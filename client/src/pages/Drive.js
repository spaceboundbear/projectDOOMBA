import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Data from '../components/RobotData';

function Drive() {
  const [newSocket, setSocket] = useState(null);
  const socket = io('http://localhost:3000');
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
    const socket = io('http://localhost:3000');
    setSocket(socket);
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED');
    });
  }, [setSocket]);

  return (
    <>
      <Row className="mt-1">
        <Col>
          <Card.Body className="justify-content-md-center ">
            <Card className="col-sm-7 bg-secondary buttons container text-center">
              <img
                className="my-3 w-100"
                src="https://a1ef-2603-8081-6405-a88d-d984-38db-ef2b-c085.ngrok.io/?action=stream"
                alt="stream"
              ></img>
            </Card>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card.Body className="justify-content-md-center">
            <Card className="drive-buttons bg-dark buttons container text-center">
              <Row className="mt-2">
                <Col className="">
                  <Button
                    size="lg"
                    className="m-3 btn btn-secondary col-sm-6"
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
                    className="m-2 btn btn-secondary col-sm-3"
                    onClick={Left}
                  >
                    LEFT
                  </Button>
                  <Button
                    size="lg"
                    className="m-2 btn btn-danger col-sm-3"
                    onClick={Stop}
                  >
                    STOP
                  </Button>
                  <Button
                    size="lg"
                    className="m-2 btn btn-secondary col-sm-3"
                    onClick={Right}
                  >
                    RIGHT
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="pb-2">
                  <Button
                    size="lg"
                    className="m-3 btn btn-secondary col-sm-6"
                    onClick={Backward}
                  >
                    BACKWARD
                  </Button>
                </Col>
              </Row>
            </Card>
          </Card.Body>
        </Col>
        <Col>
          <Card.Body className="justify-content-md-center ">
            <Card className="drive-buttons bg-dark buttons container">
              <h1 className="m-3 text-center text-light font-weight-bold">
                DATA
              </h1>
              <Data />
            </Card>
          </Card.Body>
        </Col>
      </Row>
    </>
  );
}

export default Drive;
