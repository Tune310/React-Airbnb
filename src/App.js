import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import Explore from './components/Explore'
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return [
    <Header />,
    <Explore />
  ];
}

export default App;
