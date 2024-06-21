import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTasks,
  FaTimes,
  FaHome ,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiDashboardLine } from "react-icons/ri";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hamburger Menu for Mobile View */}
      <div className="lg:hidden p-4">
        {!isOpen && (
          <button onClick={toggleSidebar}>
            <GiHamburgerMenu size={24} />
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`lg:flex flex-col bg-cyan-800 text-white lg:w-64 w-64 fixed lg:static transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out z-50 min-h-screen`}
      >
        <div className="p-4 border-b border-cyan-700 flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">Task Manager</h1>
          {isOpen && (
            <button onClick={toggleSidebar} className="lg:hidden">
              <FaTimes size={24} />
            </button>
          )}
        </div>
        <nav className="flex-grow p-4">
          <ul className="space-y-2">
          <li>
              <Link
                to="/"
                className="flex items-center p-2 rounded hover:bg-cyan-700"
                onClick={toggleSidebar}
              >
                <FaHome  className="mr-3" />
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/form"
                className="flex items-center p-2 rounded hover:bg-cyan-700"
                onClick={toggleSidebar}
              >
                <RiDashboardLine className="mr-3" />
                Task Form
              </Link>
            </li>
            <li>
              <Link
                to="/taskList"
                className="flex items-center p-2 rounded hover:bg-cyan-700"
                onClick={toggleSidebar}
              >
                <FaTasks className="mr-3" />
                Task List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
