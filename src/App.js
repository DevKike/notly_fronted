import React from 'react';
import Carousel from './components/carousel/Carousel';
import Nav from './components/nav/Nav';

import "./App.css";
import Card from './components/card/Card';
import Pricing from './components/pricing/Pricing';

function App() {
  return <>
    <Nav/>
    <div className='container'>

    <Carousel/>
    <br></br>
    <h2 className="display-5 mb-4 mb-md-5 text-center">
    Ven y experimenta la experiencia de tener todas tus tareas a la mano y organizados con nuestros servicios
</h2>
<div className='row'>
  <div className='col-md-3 mx-auto'>
  <a className="btn btn-primary btn-lg mt-3" href="/register">Únete a nosotros</a>
  </div>
  </div>


    <div className='row'>
      <Card className="col-md-3"/>
    </div>
    <p className='mt-4 text-justify fs-5'>
    En Notly, nuestro compromiso es brindarte la mejor experiencia posible para gestionar tus tareas de manera efectiva y sin complicaciones. Para aquellos que desean llevar su productividad al siguiente nivel, ofrecemos tres planes premium diseñados para adaptarse a tus necesidades:
    </p>
    <Pricing/>
    </div>
  </>
}

export default App;
