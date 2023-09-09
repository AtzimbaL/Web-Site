// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserBox from './components/UserBox';
import InfoHeader from './components/InfoHeader';
import Cantante from './components/Cantante';
import Ideas from './components/Ideas';

function App() {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 grid-rows-0 w-full min-h-screen h-fit gap-0 items-center place-items-center '>
      <InfoHeader/>
      <UserBox />
      <Ideas />
      <Cantante />
      </div>
      <Footer />
    </div>
  );
}

export default App;
