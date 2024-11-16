import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-10 bg-yellow-600"> {/* Make navbar full-width */}
      <div className="container px-4 pt-4 mx-auto flex justify-between items-center">
        
        {/* Navigation Links Section on the Left */}
        <ul className="flex gap-6 md:gap-10 text-lg text-gray-600"> {/* Change text color to gray-600 */}
          <li className="menuLink">
            <a href="#hero" className="hover:text-blue-500 transition-colors">Home</a>
          </li>
          <li className="menuLink">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          </li>
          <li className="menuLink">
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          </li>
          <li className="menuLink">
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          </li>
          <li className="menuLink">
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          </li>
        </ul>

        {/* Logo Section on the Right */}
        <div className="text-xl font-medium text-white md:ml-auto">
          Hurya
        </div>
      </div>
    </div>
  );
};

export default Navbar;

