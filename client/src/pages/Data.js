import { Container, Card, Button } from 'react-bootstrap';

function Data() {
  return (
    <Container className="w-75">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <Card.Title className="fw-bold fs-1 m-4 text-center">DATA</Card.Title>

          <ul className="list-group">
            <li className="list-group-item">Left Bumps: {5}</li>
            <li className="list-group-item">Right Bumps: {10} mins</li>
            <li className="list-group-item">Stops Made: {20}</li>
          </ul>

          <Button size="lg" className="col-sm-12 my-4 mb-2 btn btn-primary ">
            SAVE RUN
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Data;
