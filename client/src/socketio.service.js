import { io } from 'socket.io-client';

let socket;

export const startSocket = () => {
  socket = io();
  console.log('STARTING SOCKET');
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};

export const Forward = () => {
  socket.emit('move', 'forward');
  console.log('forward command emitted');
};

export const Stop = () => {
  socket.emit('move', 'stop');
  console.log('stop command emitted');
};

export const Backward = () => {
  socket.emit('move', 'backward');
  console.log('backward command emitted');
};

export const Left = () => {
  socket.emit('move', 'left');
  console.log('left command emitted');
};

export const Right = () => {
  socket.emit('move', 'right');
  console.log('right command emitted');
};

export const Dock = () => {
  socket.emit('move', 'dock');
  console.log('DOCKING COMMAND EMITTED');
};

export const playSong = () => {
  socket.emit('play', 'song');
  console.log('SONG COMMAND EMITTED');
};
