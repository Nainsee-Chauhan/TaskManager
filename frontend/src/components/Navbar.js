import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getHeading = () => {
    switch (location.pathname) {
      case '/':
        return 'Task Form';
      case '/taskList':
        return 'Task List';
      case '/task':
        return 'Task Details';
      case '/login':
        return 'Login';
      case '/signup':
        return 'Signup';
      default:
        return 'Task Manager';
    }
  };

  return (
    <nav className="bg-gray-200 font-serif p-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-cyan-900 text-3xl font-bold">
          {getHeading()}
        </div>
        <div className="flex space-x-4">
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
