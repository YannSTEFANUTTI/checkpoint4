import React from "react";
import { Routes, Route } from "react-router-dom";
import gsap from "gsap";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  gsap.from(".allFood", {
    opacity: 0,
    duration: 2,
    delay: 1.2,
    ease: "power3.out",
    rotate: 90,
  });
  gsap.from(".logo01", {
    scale: 0,
    duration: 2,
    delay: 1,
    ease: "power3.out",
    rotate: -90,
  });
  gsap.from(".cardsContainer", {
    opacity: 0,
    scale: 1.05,
    duration: 1,
    delay: 3,
    ease: "power3.out",
  });

  gsap.from(".openCreateFlex", {
    x: "30vw",
    delay: 4.5,
    duration: 1.5,
    ease: "power3.out",
  });
  gsap.from(".openCreate", {
    y: 100,
    delay: 5,
  });

  gsap.from(".cityFilter", {
    x: "80vw",
    delay: 4,
    duration: 1.5,
    ease: "power3.out",
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="/admin" element={<Admin />} /> */}
        {/*  <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
