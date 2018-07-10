import React from 'react';
import Animated from 'animated';

const DEFAULT_TIMEOUT = {
  enter: 500,
  exit: 300
}

export function enterTimingSample(value, duration) {
  return Animated.timing(value, {
    toValue: 1,
    duration
  })
}

export function exitTimingSample(value, duration) {
  return Animated.timing(value, {
    toValue: 0,
    duration
  })
}

export function interpolateStyleSample(value) {
  const y = value.interpolate({
    inputRange: [0, 1],
    outputRange: ["12px", "0px"]
  })
  return {
    opacity: Animated.template`${value}`,
    transform: Animated.template`translate3d(0, ${y}, 0)`
  }
}

export default function animatedRoute(enterTiming, exitTiming, interpolateStyle) {
  return function(Component) {
    const AnimatedComponent = Animated.createAnimatedComponent(Component);
    return class extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          animatedValue: new Animated.Value(0),
          appear: false,
          animating: false
        }

        this.enterAnimating = this.enterAnimating.bind(this);
        this.exitAnimating = this.exitAnimating.bind(this);
        this.finishedAnimating = this.finishedAnimating.bind(this);
      }

      enterAnimating(delay, duration) {
        setTimeout(
          () => {
            enterTiming(this.state.animatedValue, duration).start(this.finishedAnimating);
            this.setState({
              appear: true,
              animating: true
            })
          },
          delay
        )
      }

      exitAnimating(duration) {
        exitTiming(this.state.animatedValue, duration).start();
      }

      finishedAnimating() {
        this.setState({
          animating: false
        })
      }

      render() {
        const { animatedValue, appear, animating } = this.state;
        const animatedStyle = interpolateStyle(animatedValue);
        return (
          appear && (
            <AnimatedComponent
              {...this.props}
              finishedAnimating={!animating}
              style={animatedStyle}
            />
          )
        )
      }

      componentDidUpdate(prevProps, prevState) {
        const { status, timeout } = this.props;
        const { enter, exit } = timeout || DEFAULT_TIMEOUT;
        if (status === 'entering') {
          this.enterAnimating(exit, enter - exit);
        }

        if (status === 'exiting') {
          this.exitAnimating(exit)
        }        
      }
    }
  }
}