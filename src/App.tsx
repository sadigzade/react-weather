import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import MonthStatistics from './pages/MonthStatistics';
import Header from './shared/Header';
import Popup from './shared/Popup';

function App() {
  return (
    <div className="App">
      <div className="global-container">{/* <Popup /> */}</div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
