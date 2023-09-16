import React from 'react';
import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';

const Home: React.FC = () => {
  // const profiles = [
  //   // Your profile data here
  //   {
  //     name: 'kirtan',
  //     bio: 'devloper',
  //   },
  //   {
  //     name: 'pratham',
  //     bio: 'devloper',
  //   },
  //   {
  //     name: 'ram',
  //     bio: 'devloper',
  //   }
  // ];

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Members />
      <Footer />
    </div>
  );
};

export default Home;
