import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ScrollSpy from '../components/scroll-spy';

class Projects extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/scroll-spy`}> scroll-spy </Link>
        <Route path={`${match.url}/scroll-spy`} component={ScrollSpy} />
      </div>
    );
  }
}

export default Projects;