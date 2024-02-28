import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Yellow from "./components/Yellow";
import Purple from "./components/Purple";
import Green from "./components/Green";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/yellow">Yellow</Link>
          <Link to="/purple">Purple</Link>
          <Link to="/green">Green</Link>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/blue" element={<Blue></Blue>}></Route>
            <Route path="/red" element={<Red></Red>}></Route>
            <Route path="/yellow" element={<Yellow></Yellow>}></Route>
            <Route path="/purple" element={<Purple></Purple>}></Route>
            <Route path="/green" element={<Green></Green>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
