const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express();
const db = require('./config/connection');

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  introspection: true,
  typeDefs,
  resolvers,

  formatError: (error) => error,

  context: ({ req, res }) => {
    return {
      req,
      res,
    };
  },
});

app.use(bodyParser.json());

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
});

httpServer.listen(PORT);
