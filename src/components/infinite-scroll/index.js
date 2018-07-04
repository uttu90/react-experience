import React, { Component } from 'react';
import { default as InfiniteScrollContainer } from './InfiniteScroll';

import ReadyImage from './ReadyImage';

function getImageUrl(imageIndex) {
  return `http://api.adorable.io/avatars/250/${imageIndex}`;
}

//NOTE: The anchor must be forwardRef to the InfiniteScrollContainer.
//TODO: create HOC makeRef to make producing LoadingAnchor easier.
const LoadingAnchor = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ height: 200 }}>Loading...</div>
))

class InfiniteScrollSample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      imageIndex: 0
    }

    this.addImage = this.addImage.bind(this);
  }

  addImage() {
    this.setState(({ imageIndex, images }) => ({
      images: [...images, { imageIndex, height: Math.random() * 500 }],
      imageIndex: imageIndex + 1
    }))
  }

  render() {
    const { images } = this.state;
    return (
      <InfiniteScrollContainer 
        onObserve={this.addImage}
        anchor={LoadingAnchor}
        timeInterval={500}
      >
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
    )
  }
}

export default InfiniteScrollSample;