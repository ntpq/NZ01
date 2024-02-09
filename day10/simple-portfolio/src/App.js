import React from "react";
import "./App.css";
import Header from "./components/Header";
import Project from "./pages/Project";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <Header />
        </header>
        <body>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />}/>
          </Routes>
        </body>
      </Router>
    </div>
  );
}

export default App;
