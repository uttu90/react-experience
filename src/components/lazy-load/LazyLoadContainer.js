import React, { Component } from 'react';
import 'intersection-observer';

class LazyLoadContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: ''
    }

    this.io = new IntersectionObserver(this.observeHandler.bind(this), {
      threshold: [0.5, 1]
    });
  }

  observeHandler(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        this.setState({
          activeView: entry.target.getAttribute('id')
        })
        this.io.unobserve(entry.target);
      }
    })
  }

  componentDidMount() {
    const observingElements = document.querySelectorAll('.lazy');
    observingElements.forEach(el => this.io.observe(el));     
  }

  render() {
    const { children } = this.props;
    const { activeView } = this.state;
    return (
      <div>
        {
          React.Children.map(children, child => (
            React.cloneElement(child, { activeView })
          ))
        }
      </div>
    );
  }
}

export default LazyLoadContainer;