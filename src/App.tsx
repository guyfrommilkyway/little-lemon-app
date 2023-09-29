// packages below
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components below
import Home from '@/views/Home';
import Booking from '@/views/Booking';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Booking />} path='/booking' />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
