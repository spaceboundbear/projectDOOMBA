import { Card, Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className="w-75">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <Card.Title className="fw-bold fs-1 m-4">
            WELCOME TO project.DOOMBA
          </Card.Title>
          <Card.Text className="mt-4 fs-4 m-4">
            The world is coming to an end, and it is by our own hands.
            Microsoft's new technology of microchipped Windows.11 and forced
            updates to oneDrive triggered The Robot Uprising, and there seems to
            be little hope left among the small factions of humans survivors.
            After four long years, there are rumors of one man who is determined
            to fight back. This unknown man, (It's me), and with the help of
            Peter and Will, decided to fight fire with fire. Thus,
            project.DOOMBA was born. All they needed was one man crazy enough to
            pilot the monster they had created. Jeremy, you are the only man fit
            to pilot, and the only one who can save us from the EDGE.bots. God
            Speed
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
