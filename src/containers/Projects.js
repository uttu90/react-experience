import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StickyNav from '../samples/StickyNav';
import InfiniteFace from '../samples/InfinityFace';
import Galery from '../samples/Galery';
import LazyFace from '../samples/LazyFace';

class Projects extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/scroll-spy`}> scroll-spy </Link>
        <Link to={`${match.url}/infinite-scroll`}> infinite-scroll </Link>
        <Link to={`${match.url}/image-preload`}> image-preload </Link>
        <Link to={`${match.url}/lazy-load`}> lazy-load </Link>
        <Route path={`${match.url}/scroll-spy`} component={StickyNav} />
        <Route path={`${match.url}/infinite-scroll`} component={InfiniteFace} />
        <Route path={`${match.url}/image-preload`} component={Galery} />
        <Route path={`${match.url}/lazy-load`} component={LazyFace} />
      </div>
    );
  }
}

export default Projects;