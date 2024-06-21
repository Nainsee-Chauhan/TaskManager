import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, fetchTasks } from "../redux/tasksSlice";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const TaskEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task._id === id)
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(new Date(task.dueDate).toISOString().split("T")[0]);
      setCompleted(task.completed);
    } else {
      dispatch(fetchTasks(id));
    }
  }, [dispatch, id, task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({ id, task: { title, description, dueDate, completed } })
    );
    navigate("/taskList");
  };

  return (
    <div className="flex">
    <Sidebar/>
    <div className="flex-grow bg-gray-100 mx-auto">
      <Navbar />
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 m-6 rounded-lg shadow-lg max-w-lg w-full"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Task</h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full h-24 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mt-1 h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="completed"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Completed
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-cyan-600 text-white rounded-md shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Save Changes
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default TaskEdit;
