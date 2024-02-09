import React from "react";
import "./App.css";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
      </header>
      <body>
        <Home />
        <About />
        <Project />
        <Contact />
      </body>
    </div>
  );
}

export default App;
