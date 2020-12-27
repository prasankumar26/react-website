import React from "react";
import "./App.css";
import Navbar from "./Header/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Header/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import OurWork from "./components/OurWork";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
          <Route exact path="/ourwork">
            <OurWork />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
