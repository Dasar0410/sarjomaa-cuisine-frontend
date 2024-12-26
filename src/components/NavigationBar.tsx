import React from "react";

function NavigationBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto px-4 md:flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center justify-between md:w-auto w-full"></div>
        <a href="#" className="px-2 text">Sarjomaa.com</a>
        <div className="md:flex items-end">
          <a href="#" className="px-2">Home</a>
          <a href="#" className="px-2">Recipes</a>
          <a href="#" className="px-2">Login</a>
          </div>



      </div>
      </nav>

      
  );
}
export default NavigationBar;