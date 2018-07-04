import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ScrollSpy from '../components/scroll-spy';
import InfiniteScroll from '../components/infinite-scroll';

class Projects extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/scroll-spy`}> scroll-spy </Link>
        <Link to={`${match.url}/infinite-scroll`}> infinite-scroll </Link>
        <Route path={`${match.url}/scroll-spy`} component={ScrollSpy} />
        <Route path={`${match.url}/infinite-scroll`} component={InfiniteScroll} />
      </div>
    );
  }
}

export default Projects;