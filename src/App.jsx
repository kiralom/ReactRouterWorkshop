import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>

          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/blue" element={<Blue></Blue>}></Route>
            <Route path="/red" element={<Red></Red>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
