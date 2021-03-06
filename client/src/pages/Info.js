import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';
import TechCards from '../components/techCards';
import React from 'react';
import tech from '../components/tech';
import DummyFooter from '../components/DummyFooter';

const styles = {
  spacing: {
    lineHeight: 1.6,
  },
};

function Info() {
  return (
    <Container className="w-100 bg-none">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <h1 className="mt-2 text-center font-weight-bold">
            WHAT IS project.DOOMBA
          </h1>
          <div className="grid-container d-flex flex-wrap">
            <p style={styles.spacing} className=" mt-3 h5 m-4">
              Let's face it: cleaning is boring. Especially vacuuming. What if
              there was a way to take the most boring chore and spice it up?
              Introducing, project.DOOMBA. Control your roomba, save the world,
              and have fun doing it. Not only can you control your own cleaning
              robot, but you can do it from anywhere in the world. Take a drive,
              play a song, and make it a game.
            </p>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-3 bg-dark text-light">
        <Card.Body>
          <h1 className="mt-2 text-center font-weight-bold">TECH USED</h1>
          <div className="grid-container d-flex flex-wrap">
            {tech.map((technology) => (
              <TechCards
                key={technology.id}
                id={technology.id}
                icon={technology.icon}
                name={technology.name}
              />
            ))}
          </div>
        </Card.Body>
      </Card>
      <Row>
        <Col md={6}>
          <Card className="mt-3 bg-dark text-light">
            <Card.Body>
              <h2 className="m-2 text-center font-weight-bold">CHALLENGES</h2>
              <ListGroup className="text-center">
                <ListGroup.Item variant="dark">
                  Multiple Socket Clients
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Integrating SerialPort with rPi
                </ListGroup.Item>
                <ListGroup.Item variant="dark">Live View Camera</ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Fully Wireless Setup
                </ListGroup.Item>
                <ListGroup.Item variant="dark">
                  Combining SocketIO, React, and Apollo
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mt-3 bg-dark text-light">
            <Card.Body>
              <h2 className="m-2 text-center font-weight-bold">
                FUTURE DEVELOPMENT
              </h2>
              <ListGroup className="text-center">
                <ListGroup.Item variant="success">
                  Live Grid Updates
                </ListGroup.Item>
                <ListGroup.Item variant="success">Game Modes</ListGroup.Item>
                <ListGroup.Item variant="success">
                  Docking Robot When Run Ends
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  More Data Output
                </ListGroup.Item>
                <ListGroup.Item variant="success">
                  Replacing Brush With Circular Saw
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <DummyFooter />
    </Container>
  );
}

export default Info;
