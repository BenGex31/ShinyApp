import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/index";
import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
