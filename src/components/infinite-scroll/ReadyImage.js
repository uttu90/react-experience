import React, { Component } from 'react';

function imageStyle(loaded) {
  return {
    display: 'block',
    margin: 'auto',
    opacity: loaded ? 1 : 0,
    transition: 'opacity 1s ease'
  }
}

function containerStyle(height, loaded) {
  return {
    margin: '10px 0',
    height: height,
  }
}


class ReadyImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }

    this.image = new Image();
    this.image.onload = this.onImageLoad.bind(this);
    this.image.src = props.src;
  }

  onImageLoad() {
    this.setState({
      loaded: true
    })
  }

  render() {
    const { src, height = 200 } = this.props;
    const { loaded } = this.state;

    return (
      <div style={containerStyle(height, loaded)}>
        {
          <img 
            src={src} 
            height={loaded ? height : 0}
            style={imageStyle(loaded)} 
            alt='infinite scroll sample'
          />
        }
      </div>
    );
  }
}

export default ReadyImage;