import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Route exact path="/" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
