import React from "react";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
};

export default App;
