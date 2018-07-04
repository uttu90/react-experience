import React, { Component } from 'react';
import { default as ScrollSpyContainer } from './ScrollSpy';
import './ScrollSpy.css';

const SCROLL_SPY_ARRAY  = [0, 1, 2, 3];

class ScrollSpySample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: ''
    }

    this.onObserve = this.onObserve.bind(this);
  }

  onObserve(activeItem) {
    this.setState({
      activeItem
    })
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div> 
        <div className="scroll-nav sticky">
          {
            SCROLL_SPY_ARRAY.map(index => {
              const ref = `scroll-spy-${index}`;
              const active = ref === activeItem;
              return (
              <a
                key={index}
                href={`#${ref}`} 
                style={{ backgroundColor: active ? "tomato" : "lightgrey" }}
                onClick={() => this.onObserve(ref)}
              >
                {ref}
              </a>
            )})
          }
        </div>
        <ScrollSpyContainer onObserve={this.onObserve} >
          {
            SCROLL_SPY_ARRAY.map(index => (
              <div className='scroll-spy' id={`scroll-spy-${index}`} key={index} >
                {`Scroll spy ${index}`}
              </div>
            ))
          }
        </ScrollSpyContainer>
      </div>
    );
  }
}

export default ScrollSpySample;