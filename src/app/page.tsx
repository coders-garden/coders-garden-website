import React from 'react';
import './globals.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Members from './components/Community/Members';

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
