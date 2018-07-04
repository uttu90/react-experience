import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Nav from './components/nav';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav primary>
            <Link to="/about-me">About me</Link>
            <Link to="/projects">Projects</Link>
          </Nav>
        </div>
      </Router>
    );
  }
}

export default App;
