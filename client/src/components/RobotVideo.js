import { io } from 'socket.io-client';
import { Image } from 'react-bootstrap';

function RobotVideo() {
  const socket = io(`http://localhost:3001`);

  return <Image src="http://placehold.jp/720x480.png"></Image>;
}

export default RobotVideo;
