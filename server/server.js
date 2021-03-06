const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const app = express();
const socketio = require('socket.io');
const cors = require('cors');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

app.use(cors());

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  const http = app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });

  const io = socketio(http);

  io.on('connection', (socket) => {
    console.log('NEW CONNECTION ESTABLISHED');

    socket.on('move', (data) => {
      io.emit('move', data);
    });

    socket.on('movement', (movement) => {
      io.emit('movement', movement);
    });

    socket.on('play', (data) => {
      io.emit('play', data);
    });

    socket.on('disconnect', () => {
      io.emit('USER DISCONNECTED');
    });
  });
});
