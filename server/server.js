const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const socketIO = require('socket.io');
var cors = require('cors');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const io = socketIO(server);

app.use(cors());

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
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

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
