import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList, FaHome } from "react-icons/fa";

const TaskManager = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100">
      {/* Header */}
      <header className="w-full bg-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-4xl text-purple-800 font-serif font-semi-bold flex items-center">
            <FaClipboardList className="mr-3" />
            Task Manager
          </div>
          <nav className="space-x-8">
            <Link
              to="/form"
              className="text-gray-600 font-bold hover:text-purple-800"
            >
              ADD TASK
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row items-center container mx-auto my-10 p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100">
        <div className="md:w-1/2 md:mb-0 p-10">
          <h1 className="text-4xl font-extrabold font-serif pl-10 mb-6 text-gray-800">
            Manage Your Tasks Efficiently
          </h1>
          <p className="text-gray-600 mb-6 pl-10">
            The Task Manager is a web app for efficiently organizing and
            managing tasks. With a user-friendly interface, you can easily
            create, edit, view, and delete tasks. Its responsive design ensures
            accessibility on both desktop and mobile devices, enhancing
            productivity and time management.
          </p>
          <Link
            to="/form"
            className="inline-block bg-pink-600 text-white py-2 px-4 ml-10 rounded-md hover:bg-pink-700 transition duration-200"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 p-2">
          <img
            src="/images/img2.jpg"
            alt="Task Manager"
            className="rounded-md w-full object-cover shadow-md"
          />
        </div>
      </main>
    </div>
  );
};

export default TaskManager;
