'use client';

import React from 'react';
import FloatingShapes from './animations/FloatingShapes';

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
        <div className="z-10 w-6xl">
          <h1 className="text-4xl lg:text-7xl font-bold text-[#3d0b84] leading-tight mb-6">
            Ultimate Healthcare,<br /> Today And Tomorrow
          </h1>
          <p className="text-gray-700 text-2xl w-3xl mb-8">
            It’s important to address your health conditions during medications for the best substance.
          </p>
          <button className="px-6 py-3 bg-[#a13ae6] text-[#ffffff] font-semibold rounded-lg shadow-md hover:brightness-110 transition">
            Get Started
          </button>
        </div>

       
        <div className="relative h-[400px] md:h-[500px]">
          <FloatingShapes />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
