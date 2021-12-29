import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

function RobotButtons() {
  const [newSocket, setSocket] = useState(null);
  const socket = io(`http://localhost:3001`);
  console.log(newSocket);

  window.addEventListener(
    'keydown',
    (event) => {
      if (event.defaultPrevented) {
        return;
      }

      switch (event.key) {
        case 'ArrowDown':
          socket.emit('move', 'backward');
          console.log('arrow down press');
          break;
        case 'ArrowUp':
          socket.emit('move', 'forward');
          console.log('arrow up press');
          break;
        case 'ArrowLeft':
          socket.emit('move', 'left');
          console.log('arrow left press');
          break;
        case 'ArrowRight':
          socket.emit('move', 'right');
          console.log('arrow right press');
          break;
        default:
          return;
      }
      event.preventDefault();
    },
    true
  );

  window.addEventListener(
    'keyup',
    (event) => {
      if (event.defaultPrevented) {
        return;
      }
      socket.emit('move', 'stop');
      event.preventDefault();
    },
    true
  );

  function Forward() {
    socket.emit('move', 'forward');
    console.log('forward command emitted');
  }

  function Stop() {
    socket.emit('move', 'stop');
    console.log('stop command emitted');
  }

  function Backward() {
    socket.emit('move', 'backward');
    console.log('backward command emitted');
  }

  function Left() {
    socket.emit('move', 'left');
    console.log('left command emitted');
  }

  function Right() {
    socket.emit('move', 'right');
    console.log('right command emitted');
  }

  useEffect(() => {
    const socket = io(`http://localhost:3000`);
    setSocket(socket);
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED');
    });

    return () => socket.close();
  }, [setSocket]);

  return (
    <div className="buttons">
      <button className="m-1 btn btn-primary" onClick={Forward}>
        FORWARD
      </button>
      <button className="m-1 btn btn-primary" onClick={Backward}>
        BACKWARD
      </button>
      <button className="m-1 btn btn-primary" onClick={Left}>
        LEFT
      </button>
      <button className="m-1 btn btn-primary" onClick={Right}>
        RIGHT
      </button>
      <button className="m-1 btn btn-danger" onClick={Stop}>
        STOP
      </button>
    </div>
  );
}

export default RobotButtons;
