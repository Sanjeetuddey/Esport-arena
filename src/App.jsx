import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Dashbroad from './page/dashbroad';
import Player from './page/player';
import Event from './page/event';
import Booking from './page/booking';
import Login from './page/login';
import Home from './page/home';
import Card from './page/card';
import EventCard from './page/eventCard';


function App() {
  return (
    <>
    <Router>
<div className="min-h-screen bg-gray-900 text-white">
<nav className="bg-gray-800 p-4 shadow-lg flex justify-between items-center">
<h1 className="text-2xl font-bold">Esport Arena</h1>
<div className="space-x-4">
 <Link to="/home" className="hover:text-blue-400">Home</Link>
<Link to="/" className="hover:text-blue-400">Dashboard</Link>
<Link to="/players" className="hover:text-blue-400">Players</Link>
<Link to="/events" className="hover:text-blue-400">Events</Link>
<Link to="/bookings" className="hover:text-blue-400">Bookings</Link>
<Link to="/login" className="hover:text-blue-400">Login</Link>
</div>
</nav>


<Routes>
  <Route path="/home" element={<Home />} />
<Route path="/" element={<Dashbroad />} />
<Route path="/players" element={<Player />} />
<Route path="/events" element={<Event />} />
<Route path="/bookings" element={<Booking />} />
<Route path="/login" element={<Login />} />
</Routes>
</div>
</Router>
    </>
  )
}

export default App;
