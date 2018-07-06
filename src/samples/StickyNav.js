import React, { Component } from 'react';
import { default as ScrollSpyContainer } from '../components/scroll-spy';
import './StickyNav.css';

const NAV_IDS = [0, 1, 2, 3];

class StickyNav extends Component {
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
        <h1>Scroll spy</h1>
        <div className="scroll-nav sticky">
          {
            NAV_IDS.map(index => {
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
              )
            })
          }
        </div>
        <ScrollSpyContainer onObserve={this.onObserve} >
          {
            NAV_IDS.map(index => (
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

export default StickyNav;