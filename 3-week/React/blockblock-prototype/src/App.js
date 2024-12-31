import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-100">
        <div className="flex space-x-8">
          <Link to="/" className="text-2xl text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/" className="text-2xl text-blue-500 hover:underline">
            Home
          </Link>
        </div>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
