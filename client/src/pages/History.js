import { Container, Card } from 'react-bootstrap';

function History() {
  return (
    <Container className="w-75">
      <Card className="mt-5 bg-dark text-light">
        <Card.Body>
          <Card.Title className="fw-bold fs-1 m-4 text-center">
            RUN HISTORY
          </Card.Title>
          <Card.Text className="mt-4 fs-4 m-4"></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default History;
