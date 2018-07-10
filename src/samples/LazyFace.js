import React, { Component } from 'react';
import LazyLoadContainer, { makeLazy } from '../components/lazy-load';
import { generateImages } from './utils';

const imageStyle = {
  display: 'block',
  height: 250,
  width: 250
}

const imageContainerStyle = {
  height: 250,
  width: 250,
  backgroundColor: 'lightgrey',
  margin: '10px 0'
}

function SimpleImage(props) {
  return <img {...props} alt='lazy-load' />
}

const LazyImage = makeLazy(SimpleImage);

class LazyLoad extends Component {
  render() {
    return (
      <div style={this.props.style}>
        <h1>Lazy loading</h1>
        <LazyLoadContainer>
          {
            generateImages().map((imageUrl, index) => (
              <LazyImage
                key={index}
                src={imageUrl}
                containerStyle={imageContainerStyle}
                style={imageStyle}
              />
            ))
          }
        </LazyLoadContainer>
      </div>
    );
  }
}

export default LazyLoad;