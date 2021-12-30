import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Drive from '../pages/Drive';
import Data from '../pages/Data';
import History from '../pages/History';

function Main() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/drive" element={<Drive />}></Route>
      <Route exact path="/data" element={<Data />}></Route>
      <Route exact path="/history" element={<History />}></Route>
    </Routes>
  );
}

export default Main;
