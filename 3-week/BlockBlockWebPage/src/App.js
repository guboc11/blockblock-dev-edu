import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Boran from "./pages/Boran";
import Myohee from "./pages/Myohee";
import Seoyeon from "./pages/Seoyeon";
import Seuyun from "./pages/Seuyun";
import Suhyun from "./pages/Suhyun";

const App = () => {
  return (
    <Router>
      <nav className="p-4 bg-gray-100">
        <div className="flex space-x-8">
          <Link to="/" className="text-2xl text-blue-500 hover:underline">
            Home
          </Link>
          <Link to="/boran" className="text-2xl text-blue-500 hover:underline">
            출석체크
          </Link>
          <Link to="/myohee" className="text-2xl text-blue-500 hover:underline">
            스터디/소모임
          </Link>
          <Link
            to="/seoyeon"
            className="text-2xl text-blue-500 hover:underline"
          >
            출석체크
          </Link>
          <Link to="/seuyun" className="text-2xl text-blue-500 hover:underline">
            Q&A
          </Link>
          <Link to="/suhyun" className="text-2xl text-blue-500 hover:underline">
            블록블록 프로젝트
          </Link>
        </div>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boran" element={<Boran />} />
          <Route path="/myohee" element={<Myohee />} />
          <Route path="/seoyeon" element={<Seoyeon />} />
          <Route path="/seuyun" element={<Seuyun />} />
          <Route path="/suhyun" element={<Suhyun />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
