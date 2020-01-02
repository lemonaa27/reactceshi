import React, { Component } from 'react';
import './App.css';
import "../styles/reset.css"
import '../untils/rem'
import Routers from "../router/router"
class App extends Component {
  render() {
    return (
        <Routers/>
    );
  }
}

export default App;
