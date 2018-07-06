import React, { Component } from 'react';
import Animated from 'animated';

function getStyle({ opacity, y }) {
  return {
    opacity,
    transform: `translate3d(0, ${y}, 0)`
  }
}

class Wrapper extends Component {
  render() {
    const { opacity, children } = this.props;
    return opacity && (
      <div style={getStyle(this.props)}>
        {
          React.Children.map(children, child => React.cloneElement(child, this.props))
        }
      </div>
    )
  }
}

const AnimatingWrapper = Animated.createAnimatedComponent(Wrapper);

class AnimatedWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: new Animated.Value(0)
    }

    this.enterAnimating = this.enterAnimating.bind(this);
    this.exitAnimating = this.exitAnimating.bind(this);
  }

  render() {
    // console.log(this.props.status, this.props.text);
    const { animating } = this.state;
    const y = animating.interpolate({
      inputRange: [0, 1],
      outputRange: ["12px", "0px"]
    });
    return (
      <AnimatingWrapper {...this.props} opacity={animating} y={y} />
    );
  }

  enterAnimating(delay, duration) {
    setTimeout(
      Animated.timing(this.state.animating, {
        toValue: 1,
        duration
      }).start,
      delay
    );
  }

  exitAnimating(duration) {
    Animated.timing(this.state.animating, {
      toValue: 0,
      duration
    }).start();
  }

  componentDidMount() {
    console.log('mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    const { status, timeout: { enter, exit } } = this.props;
    if (status === 'entering') {
      this.enterAnimating(exit, enter - exit);
    }

    if (status === 'exiting') {
      this.exitAnimating(exit)
    }
  }
}

export default AnimatedWrapper;