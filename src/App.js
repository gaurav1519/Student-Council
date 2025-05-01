import React from "react";
import { Routes, Route } from "react-router-dom"; // No need to import BrowserRouter here
import Navbar from "./Components/Navbar";
import Event from "./Components/Event";
import Home from "./Components/Home"; // example page
import About from "./Components/About"; // example page
// import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
