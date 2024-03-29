import React from 'react';
import Carousel from './components/carousel/Carousel';
import Nav from './components/nav/Nav';

import "./App.css";
import Card from './components/card/Card';
import Pricing from './components/pricing/Pricing';

function App() {
  return <>
    <Nav/>
    <Carousel/>
    <p className='h3 mt-3'>Notly</p>
    <p className='mt-3 text-justify'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div className='row'>
      <Card className="col-md-3"/>
      <Card className="col-md-3"/>
      <Card className="col-md-3"/>
      <Card className="col-md-3"/>
    </div>
    <p className='mt-3 text-justify'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <Pricing/>
  </>
}

export default App;
