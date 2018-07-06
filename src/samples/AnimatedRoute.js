import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import transitionRoute, { AnimateWrapper } from '../components/animate-route';
import { Route1, Route2 } from './SampleRoutes';
import Galery from './Galery';
import GoogleMap from './GoogleMap';

const FadeRoute = transitionRoute(AnimateWrapper);


class AnimatedRoute extends Component {
  state = {
    entered: false
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <Link to={`${match.url}/animated-route-1`}>Animated-route-1</Link>
        <Link to={`${match.url}/animated-route-2`}>Animated-route-2</Link>
        <Link to={`${match.url}/animated-route-3`}>Animated-route-3</Link>
        <FadeRoute path={`${match.url}/animated-route-1`} text="Animated Route 1" timeout={{ enter: 1000, exit: 500 }} >
          <Route1 />
        </FadeRoute>
        <FadeRoute path={`${match.url}/animated-route-2`} text="Animated Route 2" timeout={{ enter: 1000, exit: 500 }} onEntered={() => { this.setState({ entered: true})}}>
          <Route2 entered={this.state.entered} />
        </FadeRoute>
        <FadeRoute path={`${match.url}/animated-route-3`} text="Animated Route 3" timeout={{ enter: 1000, exit: 500 }} >
          <GoogleMap />
        </FadeRoute>
      </div>
    );
  }
}

export default AnimatedRoute;