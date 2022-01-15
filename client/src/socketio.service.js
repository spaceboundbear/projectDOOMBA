import { io } from 'socket.io-client';

let socket;

export const startSocket = (setConnection) => {
  socket = io();
  console.log('STARTING SOCKET');
  setConnection('ACTIVE');
};

export const disconnectSocket = () => {
  console.log('DISCONNECTING SOCKET');
  if (socket) socket.disconnect();
};

export const Forward = (setMovement, setSpeed) => {
  socket.emit('move', 'forward');
  setMovement('FORWARD');
  setSpeed(100);
};

export const Stop = (setMovement, setSpeed) => {
  socket.emit('move', 'stop');
  setMovement('STOPPED');
  setSpeed(0);
};

export const Backward = (setMovement, setSpeed) => {
  socket.emit('move', 'backward');
  setMovement('BACKWARD');
  setSpeed(-100);
};

export const Left = (setMovement, setSpeed) => {
  socket.emit('move', 'left');
  setMovement('LEFT');
  setSpeed(100);
};

export const Right = (setMovement, setSpeed) => {
  socket.emit('move', 'right');
  setMovement('RIGHT');
  setSpeed(100);
};

export const Dock = (setMovement, setSpeed) => {
  socket.emit('move', 'dock');
  setMovement('DOCKING');
  setSpeed(100);
};

export const playSong = () => {
  socket.emit('play', 'song');
};
