import React, { Component } from 'react';
import makeLazy from './makeLazy';
import LazyLoadContainer from './LazyLoadContainer';

function generateImages() {
  let imageArray = [];
  for (let i = 0; i < 100; i++) {
    imageArray.push(`http://api.adorable.io/avatars/250/${i}`);
  }
  // Dummy image to test error
  //imageArray.push('http://dummy-image');
  return imageArray;
}

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
  return <img {...props} alt='lazy-load'/>
}

const LazyImage = makeLazy(SimpleImage);

class LazyLoad extends Component {
  render() {
    return (
      <div>
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