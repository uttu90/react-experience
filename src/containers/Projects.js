import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/scroll-spy`}> scroll-spy </Link>
      </div>
    );
  }
}

export default Projects;