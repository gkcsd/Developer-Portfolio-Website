import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Project from "./components/Project";
import About from "./components/About";
import Mentor from "./components/Mentor";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Project />
      <About />
      <Mentor />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
