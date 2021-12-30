import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
