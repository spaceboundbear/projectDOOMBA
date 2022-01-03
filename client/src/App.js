import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

import Footer from './components/Footer';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Drive from './pages/Drive';
import Data from './pages/Data';
import Info from './pages/Info';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Container>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/drive" component={Drive}></Route>
              <Route exact path="/data" component={Data}></Route>
              <Route exact path="/info" component={Info}></Route>
            </Switch>
          </Container>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
