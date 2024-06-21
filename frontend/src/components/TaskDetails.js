import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";
import { useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const TaskDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task._id === id)
  );
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskStatus === "idle" || !task) {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch, id, task]);

  if (taskStatus === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (taskStatus === "failed") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  if (!task) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg">Task not found</div>
      </div>
    );
  }

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-grow bg-gray-100 container mx-auto">
        <Navbar/>
        <div className="flex justify-center mt-24 p-10">
          <div className="p-10 bg-white shadow-lg rounded-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-black mb-6 flex items-center">
              <FaInfoCircle className="mr-2" /> {task.title}
            </h1>
            <p className="text-gray-700 mb-6">{task.description}</p>
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="mr-2 text-gray-600" />
              <p className="text-sm text-gray-600">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center">
              {task.completed ? (
                <FaCheckCircle className="mr-2 text-green-600" />
              ) : (
                <FaTimesCircle className="mr-2 text-red-600" />
              )}
              <p className="text-sm text-gray-600">
                Completed: {task.completed ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default TaskDetail;
