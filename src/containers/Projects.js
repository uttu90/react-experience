import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import animateRoute from '../components/animate-route';
import { Transition, TransitionGroup } from 'react-transition-group';
import StickyNav from '../samples/StickyNav';
import InfinityFace from '../samples/InfinityFace';
import Galery from '../samples/Galery';
import LazyFace from '../samples/LazyFace';
import GoogleMap from '../samples/GoogleMap';
import { 
  enterTimingSample, 
  exitTimingSample, 
  interpolateStyleSample
} from '../components/animate-route/animateRoute';

import './Projects.css';


const enhance = animateRoute(enterTimingSample, exitTimingSample, interpolateStyleSample);
const AnimatedStickyNav = enhance(StickyNav);
const AnimatedInfinityFace = enhance(InfinityFace);
const AnimatedGalery = enhance(Galery);
const AnimatedLazyFace = enhance(LazyFace);
const AnimatedGoogleMap = enhance(GoogleMap);

const ROUTE_TIMEOUT = {
  enter: 1000,
  exit: 500
}

class Projects extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <div>
        <div className="container">
          <Link to={`${match.url}/scroll-spy`}> scroll-spy </Link>
          <Link to={`${match.url}/infinite-scroll`}> infinite-scroll </Link>
          <Link to={`${match.url}/image-preload`}> image-preload </Link>
          <Link to={`${match.url}/lazy-load`}> lazy-load </Link>
          <Link to={`${match.url}/load-external-js`}> load-external-js </Link>
        </div>
        <TransitionGroup>
          <Transition
            key={location.key}
            timeout={ROUTE_TIMEOUT}
          >
            {
              status => (
                <Switch location={location}>
                  <Route path={`${match.url}/scroll-spy`}>
                    <AnimatedStickyNav status={status} timeout={ROUTE_TIMEOUT}/>
                  </Route>
                  <Route path={`${match.url}/infinite-scroll`}>
                    <AnimatedInfinityFace status={status} timeout={ROUTE_TIMEOUT} />
                  </Route>
                  <Route path={`${match.url}/image-preload`}>
                    <AnimatedGalery status={status} timeout={ROUTE_TIMEOUT}/>
                  </Route>
                  <Route path={`${match.url}/lazy-load`}>
                    <AnimatedLazyFace status={status} timeout={ROUTE_TIMEOUT}/>
                  </Route>
                  <Route path={`${match.url}/load-external-js`}>
                    <AnimatedGoogleMap status={status} timeout={ROUTE_TIMEOUT}/>
                  </Route>
                </Switch>
              )
            }
          </Transition>
        </TransitionGroup>
      </div>
    );
  }
}

export default Projects;