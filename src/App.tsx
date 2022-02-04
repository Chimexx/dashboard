import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Expenses from "./components/Pages/Expenses/Expenses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
				<Sidebar />
				<Expenses />
			</div>
		</Router>
	);
}

export default App;
