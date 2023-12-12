import React from 'react';
import 'animate.css';

const Home = () => {
  return (
    <div className="bg-cover bg-center h-screen flex items-center animate__animated animate__fadeInLeft" style={{ backgroundImage: 'url("https://shorturl.at/sAEX8")' }}>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-semibold text-red mb-4 md:mb-9  animate__animated animate__fadeInRight" style={{ color: 'red' }}>
          SADHANA FOOD CARNIVAL
        </h1>
        <p className="text-3xl md:text-6xl text-red mb-2  animate__animated animate__fadeInRight" style={{ color: 'red' }}>
          NAIDU NAATI STYLE BIRYANI.
        </p>
      </div>
    </div>
  );
};

export default Home;
