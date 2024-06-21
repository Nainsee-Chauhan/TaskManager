import React from "react";
import TaskForm from "../components/TaskForm";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow container mx-auto">
          {/* <Navbar /> */}
          <TaskForm />
          {/* <TaskList /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
