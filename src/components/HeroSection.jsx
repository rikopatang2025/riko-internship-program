import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">RIKO Internship Program</h1>
        <p className="text-xl md:text-2xl mb-6">Kickstart your career with industry-level training and projects.</p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200">Join Now</button>
      </div>
    </section>
  );
};

export default HeroSection;
