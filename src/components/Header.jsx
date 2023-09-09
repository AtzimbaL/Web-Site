// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-[#053B50] p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="sm:text-sm  md:text-xl font-semibold">Artistas de K-pop</h1>
        <ul className="flex space-x-4">
          <li><a href="http://localhost/crud/index.html" className="sm:text-sm md:text-lg hover:underline">Login</a></li>
          
          <li><a href="#" className="sm:text-sm md:text-lg hover:underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
