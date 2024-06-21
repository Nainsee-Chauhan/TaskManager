import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import Navbar from "./Navbar";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, dueDate }));
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="bg-gray-100 align-center h-full">
      <Navbar />
      <div className="m-14 align-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
            Add New Task
          </h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Enter task title"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-32 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              placeholder="Enter task description"
            ></textarea>
          </div>
          <div className="mb-4 flex items-end space-x-4">
            <div className="flex-1">
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Due Date
              </label>
              <input
                type="date"
                id="dueDate"
                min={getTodayDate()}
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />
            </div>
            <button
              type="submit"
              className="py-2 w-full bg-teal-600 text-white rounded-md shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
