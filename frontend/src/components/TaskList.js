import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, deleteTask } from "../redux/tasksSlice";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const getShortDescription = (description) => {
    const words = description.split(" ");
    if (words.length <= 5) {
      return description;
    }
    return words.slice(0, 5).join(" ") + "...";
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow container mx-auto">
        <div className="container bg-gray-100 rounded-lg shadow-lg h-full">
          <Navbar />
          {taskStatus === "loading" && <p className="text-center">Loading...</p>}

          {taskStatus === "failed" && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {taskStatus === "succeeded" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-6 p-4">
              {tasks.map((task) => (
                <div
                  key={task._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-4 relative">
                    {task.completed && (
                      <GiCheckMark className="absolute top-4 right-4 text-4xl text-green-500" />
                    )}
                    <h2 className="text-xl font-semibold mb-2">{task.title}</h2>
                    <p className="text-gray-700 mb-4">
                      {getShortDescription(task.description)}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                    <div className="flex justify-end">
                      <Link
                        to={`/task/${task._id}`}
                        className="px-2 py-2 text-cyan-600 font-bold rounded-md mr-2 hover:bg-cyan-300"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit/${task._id}`}
                        className="px-2 py-2 text-green-600 font-bold  rounded-md mr-2 hover:bg-green-300"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="px-4 py-2 text-red-600 font-bold rounded-md hover:bg-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
