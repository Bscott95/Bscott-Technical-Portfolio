import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={AboutMe} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
