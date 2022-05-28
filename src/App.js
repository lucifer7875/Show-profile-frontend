import './App.css';
import { useState } from 'react'
import React from 'react'
import Login from "./components/login/login"
import Register from './components/register/register';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
