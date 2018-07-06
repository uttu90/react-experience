import React from 'react';
import { Route } from 'react-router-dom';
import { Transition } from 'react-transition-group';

export default function transitionRoute(Component) {
  return class extends React.Component {
    render() {
      const { 
        onEnter, 
        onEntering, 
        onEntered, 
        onExit, 
        onExiting, 
        onExited,
        path,
        exact,
        timeout,
        ...remainProps
      } = this.props;
      return (
        <Route
          path={path}
          exact={exact} 
          children = {(props) => (
            <Transition
              in={!!props.match}
              timeout={timeout}
              onEnter={onEnter}
              onEntering={onEntering}
              onEntered={onEntered}
              onExit={onExit}
              onExiting={onExiting}
              onExited={onExited}
              unmountOnExit
            >
              {
                status => <Component status={status} timeout={timeout} {...remainProps} />
              }
            </Transition>
          )}
        />
      )
    }
  }
}
