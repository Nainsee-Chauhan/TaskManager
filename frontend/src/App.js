import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Home from "./pages/Home";
import TaskDetail from "./components/TaskDetails";
import TaskEdit from "./components/TaskEdit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "./components/TaskList";
import TaskManager from "./pages/TaskManager";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ToastContainer />
        <Routes>
        <Route path="/" element={<TaskManager/>} />
          <Route path="/form" element={<Home />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/edit/:id" element={<TaskEdit />} />
          <Route path="/taskList" element={<TaskList />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
