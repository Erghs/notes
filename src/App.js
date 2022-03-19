import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {NavBar} from './components/NavBar'
import { Nodes } from './pages/Nodes';

function App() {
  return (
    <div>
    {<NavBar />}
    <div className="container pt-4">
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/nodes' element={<Nodes />} />
        <Route path='/about' element={<About />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
