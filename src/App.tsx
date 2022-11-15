import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import MonthStatistics from './pages/MonthStatistics';
import Header from './shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;
