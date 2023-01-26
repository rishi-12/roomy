import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavBar />}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;