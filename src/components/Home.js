import React from 'react';
import Header from './Header';
import Explore from './Explore';
import Movie from './Movie';
import LosAngeles from './LosAngeles';
import Stay from './Stay';
import Recommended from './Recommended';
import { Button } from 'reactstrap';

function Home() {
  return [
    <Header />,
    <Explore name="Explore Airbnb" />,
    <Movie />,
    <LosAngeles />,
    <Stay />,
    <Recommended />
  ];
}

export default Home;