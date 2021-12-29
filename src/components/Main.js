import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Drive from '../pages/Drive';
import Data from '../pages/Data';

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/drive" element={<Drive />}></Route>
      <Route exact path="/data" element={<Data />}></Route>
    </Routes>
  );
}

export default Main;
