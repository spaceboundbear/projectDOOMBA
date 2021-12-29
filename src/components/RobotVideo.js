import { io } from 'socket.io-client';

function RobotVideo() {
  const socket = io(`http://localhost:3001`);

  socket.on('image', (data) => {
    console.log('DATA');
  });

  return <div>VIDYA GOES HERE</div>;
}
