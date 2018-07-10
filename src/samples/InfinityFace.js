import React, { Component } from 'react';
import InfiniteScrollContainer from '../components/infinite-scroll';
import ReadyImage from './ReadyImage';
import { getImageUrl } from './utils';

const TIMER_INTERVAL = 500;

const LoadingAnchor = (props) => (
  <div style={{ height: 200 }}>Loading...</div>
)

class InfiniteFace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      imageIndex: 0,
      loadMore: false
    }

    this.onObserve = this.onObserve.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  addImage() {
    this.setState(({ imageIndex, images }) => ({
      images: [...images, { imageIndex, height: Math.random() * 500 }],
      imageIndex: imageIndex + 1
    }))
  }

  onObserve(anchorCatching) {
    if (anchorCatching && !this.timerId) {
      this.timerId = setInterval(this.addImage, TIMER_INTERVAL);
    }
    if (!anchorCatching) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  render() {
    const { images } = this.state;
    return (
      <div style={this.props.style}>
      <InfiniteScrollContainer
        onObserve={this.onObserve}
        anchor={LoadingAnchor}
      >
        <h1>Infinite Scroll</h1>
        {
          images.map(image => (
            <ReadyImage
              key={image.imageIndex}
              src={getImageUrl(image.imageIndex)}
              height={image.height}
            />
          ))
        }
      </InfiniteScrollContainer>
      </div>
    )
  }
}

export default InfiniteFace;