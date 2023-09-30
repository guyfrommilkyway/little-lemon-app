// packages below
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components below
import Home from '@/views/Home';
import Booking from '@/views/Booking';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Booking />} path='/booking' />
    </Routes>
  );
};

export default App;
