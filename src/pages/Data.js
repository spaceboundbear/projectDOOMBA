import { Container, Card, Button } from 'react-bootstrap';

function Data() {
  return (
    <Container className="w-75">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <Card.Title className="fw-bold fs-1 m-4 text-center">DATA</Card.Title>
          <Card.Text className="mt-4 fs-4 m-4">
            <ul class="list-group">
              <li class="list-group-item">Walls Bumped: {5}</li>
              <li class="list-group-item">Session Time: {10} mins</li>
              <li class="list-group-item">Stops Made: {20}</li>
              <li class="list-group-item">ETC</li>
              <li class="list-group-item">ETC</li>
            </ul>
          </Card.Text>
          <Button size="lg" className="col-sm-12  mb-3 btn btn-primary ">
            SAVE RUN
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Data;
