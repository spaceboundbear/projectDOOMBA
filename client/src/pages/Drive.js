import RobotButtons from '../components/RobotButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import RobotVideo from '../components/RobotVideo';
import { Card, Container, Row, Image } from 'react-bootstrap';

function Drive() {
  return (
    <>
      <Container className="w-auto">
        <Card.Body className="justify-content-md-center ">
          <div>
            <RobotButtons />
          </div>
        </Card.Body>
      </Container>
    </>
  );
}

export default Drive;
