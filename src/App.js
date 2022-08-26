import React, { Component } from "react";
// import { Route, Switch, BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import Astronomy from "./components/Astronomy";
import Home from "./components/Home";
import Education from "./components/Education";
import Eclipse from "./components/Eclipse";
import EclipsePatagonia from "./components/EclipsePatagonia";
import Totality from "./components/Totality";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Article1 from "./components/articles/Article1";
import Article2 from "./components/articles/Article2";
import Article3 from "./components/articles/Article3";
import Article4 from "./components/articles/Article4";
import Article5 from "./components/articles/Article5";
import Article6 from "./components/articles/Article6";

class App extends Component {
  state = {
    screen: 0,
  };

  setScreen = (screen) => {
    this.setState({ screen });
  };

  sections = [
    <Home setScreen={this.setScreen} />,
    <Astronomy setScreen={this.setScreen} />,
    <Eclipse setScreen={this.setScreen} />,
    <Totality setScreen={this.setScreen} />,
    <EclipsePatagonia setScreen={this.setScreen} />,
    <Education setScreen={this.setScreen} />,
    <Contact setScreen={this.setScreen} />,
    <Article1 setScreen={this.setScreen} />,
    <Article2 setScreen={this.setScreen} />,
    <Article3 setScreen={this.setScreen} />,
    <Article4 setScreen={this.setScreen} />,
    <Article5 setScreen={this.setScreen} />,
    <Article6 setScreen={this.setScreen} />,
  ];

  render() {
    const { screen } = this.state;
    return this.sections[screen];
  }
}

export default App;