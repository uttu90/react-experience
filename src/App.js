import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Projects from './containers/Projects';

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
          <Route path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
