import './App.css';
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import {NavBar} from './components/NavBar'
import { Nodes } from './pages/Nodes';
import { Alert } from './components/Alert';
import { AlertState } from './Context/alert/AlertState';
import {FirebaseState} from './Context/firebase/FirebaseState'

function App() {
  return (
    <FirebaseState>
    <AlertState>
    <div>
    {<NavBar />}
    <div className="container pt-4">
     < Alert/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/nodes' element={<Nodes/>} />
        <Route path='/about' element={<About />} />
    </Routes>
    </div>
    </div>
    </AlertState>
    </FirebaseState>
  );
}

export default App;
