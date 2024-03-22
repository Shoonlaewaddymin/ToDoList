import React from "react";
import Header from "./components/Header";
import ToDosLogic from "./components/ToDosLogic";
import InputTodo from "./components/InputTodo";
import TodosList from "./components/TodosList";
import "bootstrap/dist/css/bootstrap.css";


const App = () => {
  return (
    <div className="container p-5">
      <Header className="mb-5"/>
      <ToDosLogic className="text-center" />
    </div>
  );
};


export default App;
