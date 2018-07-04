import React, { Component } from 'react';
import 'intersection-observer';


class InfiniteScroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadMore: false,
    }

    this.anchor = React.createRef();

    this.io = new IntersectionObserver(this.observing.bind(this), {
      threshold: [0, 1]
    });
  }

  observing(entries) {
    entries.forEach(entry => {
      this.setState({
        loadMore: entry.intersectionRatio > 0
      })
    })
  }

  componentDidMount() {
    this.io.observe(this.anchor.current);    
  }

  componentDidUpdate(prevProps, prevState) {
    const { loadMore } = this.state;
    const { onObserve, timeInterval } = this.props;
    if (loadMore && !this.timerId) {
      this.timerId = setInterval(onObserve, timeInterval);
    }
    if (!loadMore) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    } 
  }
  
  render() {
    const { anchor: Anchor, children } = this.props;
    return (
      <div>
        {
          children
        }
        <Anchor ref={this.anchor} />
      </div>
    );
  }
}

export default InfiniteScroll;