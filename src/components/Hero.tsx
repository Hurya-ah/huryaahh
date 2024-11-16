// components/Hero.tsx
import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-cover text-white flex items-center"
      style={{ backgroundImage: "url('/banner__bg.png')", backgroundSize: "35%" }}
    >
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section Content */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 lg:px-16 py-20">
        
        {/* Left Section: Text */}
        <div className="text-left lg:w-1/2 space-y-4" >
          <h1 className="text-4xl md:text-5xl font-bold mb-4" >
           Hi, I'm Hurya
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            I'm a passionate web developer specializing in modern web technologies like React, Next.js, and TypeScript.
          </p>
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
          >
            Learn More About Me
          </a>
        </div>

        {/* Right Section: Profile Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/3 flex justify-center">
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <img
              src="/profile-image.jpg"
              alt="Hurya's profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
