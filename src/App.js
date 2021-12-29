import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
