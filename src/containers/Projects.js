import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import transitionRoute, { AnimateWrapper } from '../components/animate-route';
import StickyNav from '../samples/StickyNav';
import InfinityFace from '../samples/InfinityFace';
import Galery from '../samples/Galery';
import LazyFace from '../samples/LazyFace';
import GoogleMap from '../samples/GoogleMap';

const FadeRoute = transitionRoute(AnimateWrapper);

class Projects extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/scroll-spy`}> scroll-spy </Link>
        <Link to={`${match.url}/infinite-scroll`}> infinite-scroll </Link>
        <Link to={`${match.url}/image-preload`}> image-preload </Link>
        <Link to={`${match.url}/lazy-load`}> lazy-load </Link>
        <Link to={`${match.url}/load-external-js`}> load-external-js </Link>
        <FadeRoute path={`${match.url}/scroll-spy`} timeout={{ enter: 1000, exit: 500 }}>
          <StickyNav />
        </FadeRoute>
        <FadeRoute path={`${match.url}/infinite-scroll`} timeout={{ enter: 1000, exit: 500 }} >
          <InfinityFace />
        </FadeRoute>
        <FadeRoute path={`${match.url}/image-preload`} timeout={{ enter: 1000, exit: 500 }} >
          <Galery />
        </FadeRoute>
        <FadeRoute path={`${match.url}/lazy-load`} timeout={{ enter: 1000, exit: 500 }} >
          <LazyFace />
        </FadeRoute>
        <FadeRoute path={`${match.url}/load-external-js`} timeout={{ enter: 1000, exit: 500 }} >
          <GoogleMap />
        </FadeRoute>
      </div>
    );
  }
}

export default Projects;