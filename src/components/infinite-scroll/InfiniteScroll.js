import React, { Component } from 'react';
import 'intersection-observer';


class InfiniteScroll extends Component {
  constructor(props) {
    super(props);

    this.anchor = React.createRef();

    this.io = new IntersectionObserver(this.observing.bind(this), {
      threshold: [0, 1]
    });
  }

  observing(entries) {
    entries.forEach(entry => {
      this.props.onObserve(entry.intersectionRatio > 0)
    })
  }

  componentDidMount() {
    this.io.observe(this.anchor.current);    
  }
  
  render() {
    const { anchor: Anchor, children, anchorContainerStyle } = this.props;
    return (
      <div>
        {
          children
        }
        <div ref={this.anchor} style={anchorContainerStyle}>
          <Anchor />
        </div>
      </div>
    );
  }
}

export default InfiniteScroll;