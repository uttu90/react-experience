import React, { Component } from 'react';
import { loadJS } from '../utils';

const API_KEY = 'AIzaSyBKGy9uJxfI2n3fgv1wV9dN-myefS6BqQ8';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loaded: false
    }

    this.startLoading = this.startLoading.bind(this);
    this.finishLoading = this.finishLoading.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { finishedAnimating: waiting } = prevProps;
    const { finishedAnimating } = this.props;
    if (finishedAnimating && !waiting ) {
      this.startLoading();
    }
  }
  
  startLoading() {
    this.setState({
      loading: true
    });
    loadJS(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`, 'google-maps')
      .then(this.finishLoading)
      .catch(error => {
        // console.log('abc')
      })
  }

  finishLoading() {
    this.setState({
      loading: false,
      loaded: true
    });
    this.initMap();
  }

  initMap() {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  }

  render() {
    return (
      <div>
        <h1>Google map: Load external javascript</h1>
        <div id="map" style={{ height: 480, width: 640 }}>
        </div>
      </div>
    );
  }
}

export default GoogleMap;