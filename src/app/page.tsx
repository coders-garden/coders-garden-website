import React from 'react';
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';

const Home: React.FC = () => {
  return (
    <div className='px-5 max-w-6xl m-auto'>
      <Header />
      <Hero />
      <About />
      <Members />
      <Footer />
    </div>
  );
};

export default Home;
