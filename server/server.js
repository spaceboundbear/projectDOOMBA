const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

io.on('connection', (socket) => {
  console.log('NEW CONNECTION ESTABLISHED');

  socket.on('move', (data) => {
    io.emit('move', data);
    console.log(data);
  });

  socket.on('robot', (data) => {
    console.log(data);
  });

  socket.on('angle', (angle) => {
    io.emit('angle', angle);
    console.log(angle);
  });
});

httpServer.listen(PORT);
