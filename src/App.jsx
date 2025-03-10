import { useState } from "react";
import "./App.css";
import StockBar from "./components/stockbar/stockbar";
import NavBar from "./components/navbar/NavBar";
import Profile from "./components/profile/profile";
import Projects from "./components/projects/projects";
import Timeline from "./components/timeline/timeline";

function App() {
  return (
    <>
      <StockBar />
      <NavBar />
      <div className="container">
        <Profile id="profile" />
        <Timeline id="timeline" />
        <Projects id="projects" />
      </div>
    </>
  );
}

export default App;