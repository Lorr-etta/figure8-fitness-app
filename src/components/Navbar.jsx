import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">FitnessTracker</h1>
      <ul className="flex space-x-6">
        <li><a href="#features" className="hover:text-blue-500">Features</a></li>
        <li><a href="#workouts" className="hover:text-blue-500">Workouts</a></li>
        <li><a href="#progress" className="hover:text-blue-500">Progress</a></li>
        <li><a href="#login" className="hover:text-blue-500">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
