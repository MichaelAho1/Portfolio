import { useState } from "react";
import "./App.css";
import StockBar from "./components/stockbar/stockbar";
import Profile from "./components/profile/profile";
import Projects from "./components/projects/projects";
import Timeline from "./components/timeline/timeline";

function App() {
  return (
    <>
      <StockBar />
      <div className="container">
        <Profile />
        <Timeline />
        <Projects />
      </div>
    </>
  );
}

export default App;