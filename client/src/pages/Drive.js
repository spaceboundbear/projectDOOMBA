import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Data from '../components/RobotData';
import DummyFooter from '../components/DummyFooter';
import {
  Forward,
  Backward,
  Left,
  Right,
  Stop,
  playSong,
  Dock,
  startSocket,
  disconnectSocket,
} from '../socketio.service';

function Drive() {
  let [connection, setConnection] = useState('');
  let [speed, setSpeed] = useState(0);
  let [movement, setMovement] = useState('');

  useEffect(() => {
    startSocket(setConnection);
    return () => {
      disconnectSocket();
    };
  }, []);

  return (
    <>
      <Row className="mt-1">
        <Col>
          <Card.Body className="justify-content-md-center ">
            <Card className="col-sm-10 col-md-7 bg-secondary buttons container text-center">
              <img
                className="my-3 w-100"
                src="https://15d0-2603-8081-6405-a88d-f481-bea5-4372-e850.ngrok.io/stream/video.h264"
                alt="stream"
              ></img>
            </Card>
          </Card.Body>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Card.Body className="justify-content-md-center">
            <Card className="drive-buttons bg-dark buttons container text-center">
              <Row className="mt-2">
                <Col className="">
                  <Button
                    size="lg"
                    className="my-3 btn btn-secondary col-sm-5 "
                    onClick={() => {
                      Forward(setMovement, setSpeed);
                    }}
                  >
                    FORWARD
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    size="lg"
                    className="mr-2 mt-2  btn btn-secondary col-sm-3"
                    onClick={() => {
                      Left(setMovement, setSpeed);
                    }}
                  >
                    LEFT
                  </Button>
                  <Button
                    size="lg"
                    className="mr-2 mt-2 btn btn-danger col-sm-3"
                    onClick={() => {
                      Stop(setMovement, setSpeed);
                    }}
                  >
                    STOP
                  </Button>
                  <Button
                    size="lg"
                    className="mr-2 mt-2 btn btn-secondary col-sm-3"
                    onClick={() => {
                      Right(setMovement, setSpeed);
                    }}
                  >
                    RIGHT
                  </Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col className="pb-2">
                  <Button
                    size="lg"
                    className="mt-4 mr-2 btn btn-secondary col-sm-3"
                    onClick={() => {
                      Dock(setMovement, setSpeed);
                    }}
                  >
                    GO HOME
                  </Button>
                  <Button
                    size="lg"
                    className="mt-4 mr-2 btn btn-secondary col-sm-3"
                    onClick={() => {
                      Backward(setMovement, setSpeed);
                    }}
                  >
                    BACK
                  </Button>
                  <Button
                    size="lg"
                    className="mt-4 mr-2 btn btn-primary col-sm-3"
                    onClick={playSong}
                  >
                    BATTLE CRY
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
              <Data movement={movement} speed={speed} connection={connection} />
            </Card>
          </Card.Body>
        </Col>
      </Row>
      <DummyFooter />
    </>
  );
}

export default Drive;
