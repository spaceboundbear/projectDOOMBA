import { Card, Container } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container className="w-auto">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <h1 className="m-4 font-weight-bold">WELCOME TO project.DOOMBA</h1>
          <p className=" mt-4 h4 m-4">
            The world is coming to an end, and it is by our own hands.
            Microsoft's new technology of microchipped Windows.11 and forced
            updates to oneDrive triggered The Robot Uprising, and there seems to
            be little hope left among the small factions of humans survivors.
            After four long years, there are rumors of one man who is determined
            to fight back. This unknown man, (It's me), and with the help of
            Peter, Will, and Alvin, decided to fight fire with fire. Thus,
            project.DOOMBA was born. All they needed was one man crazy enough to
            pilot the monster they had created. Jeremy, you are the only man fit
            to pilot, and the only one who can save us from the EDGE.bots. Good
            luck, and God Speed.
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
