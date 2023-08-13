import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Sidebar } from "./components";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <div classeName="app">
        <body></body>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
