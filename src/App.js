import React from "react";
import { ButtonAppBar } from "/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
