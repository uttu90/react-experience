import React, { Component } from 'react';
import 'intersection-observer';


class ScrollSpy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      observing: ''
    }

    this.observing = this.observing.bind(this);
  }

  componentDidMount() {
    // Setting the viewPort: 100% in widht and the middle 50% in height
    // Calling observer handler when the intersection is 50% - 100%
    this.io = new IntersectionObserver(this.observing, {
      rootMargin: '-25% 0px -25% 0px',
      threshold: [0.5, 1]
    });
    const observingComponents = document.querySelectorAll('.scroll-spy');
    observingComponents.forEach(comp => this.io.observe(comp));
  }

  observing(entries, observer) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.5) {
        const activeId = entry.target.getAttribute('id');
        this.props.onObserve(activeId);
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    );
  }
}

export default ScrollSpy;