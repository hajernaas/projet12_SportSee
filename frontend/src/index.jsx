import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Route exact path="/" element={<Home />} />
		<Route exact path="/user/:userId" element={<Profil />} />
		<Route exact path="/settings" element={<Settings />} />
		<Route exact path="/community" element={<Community />} />
		<Route path="*" element={<Error />} />
	</React.StrictMode>
);
