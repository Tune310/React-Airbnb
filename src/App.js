import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Explore from './components/Explore';
import Movie from './components/Movie';
import LosAngeles from './components/LosAngeles';
import Stay from './components/Stay';
import Recommended from './components/Recommended';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return [
    <Header />,
    <Explore name="Explore Airbnb" />,
    <Movie />,
    <LosAngeles />,
    <Stay />,
    <Recommended />
  ];
}

export default App;
