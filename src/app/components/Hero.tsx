import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to Coders Garden</span></h1>
        <p className="mt-4 text-lg">Discover amazing content here!</p>
      </div>
    </section>
  );
};

export default Hero;
