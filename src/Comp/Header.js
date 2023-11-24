import React from 'react';
import img from '../images/Aarti p pabale.png' 
 
const Header = () => {
  return (
    <header className="bg-slate-700 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={img}
              alt="Header Image"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="ml-2 text-xl font-bold ">Admin Panel</h1>
          </div>
          <div>
            <p>Welcome! Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


