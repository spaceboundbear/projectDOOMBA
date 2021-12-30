import { io } from 'socket.io-client';

function RobotVideo() {
  const socket = io(`http://localhost:3001`);

  return <div>VIDYA GOES HERE</div>;
}
