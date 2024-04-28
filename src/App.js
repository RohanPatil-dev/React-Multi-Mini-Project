import React from "react";
import "./App.css";
import "./style.css";

import Home from "./Food delivery/Components/Home";
import Investment from "./Investment/Investment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoForm from "./React TODO List/TodoForm";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Home />
        
        <Investment /> */}

        <TodoForm />

      </BrowserRouter>
    </>
  );
}

export default App;
