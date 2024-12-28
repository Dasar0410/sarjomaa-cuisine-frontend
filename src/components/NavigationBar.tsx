import React from "react";

function NavigationBar() {
  return (
    <nav className="bg-green-800 p-4 text-white flex items-center justify-between py-4 px-8">
       <div className="flex items-center space-x-2">
        <img 
          src="/cookpedia-logo.svg" 
          alt="Cookpedia Logo" 
          className="w-8 h-8" 
        />
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