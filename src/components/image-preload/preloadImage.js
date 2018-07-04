import React from 'react';

export default function preLoad(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        loaded: false,
        error: false
      }
    }

    componentDidMount() {
      const { imageArray } = this.props;
      Promise.all(imageArray.map(imageUrl => {
        return new Promise(function(resolve, reject) {
          const image = new Image();
          image.src = imageUrl;
          image.onload = resolve;
          image.onerror = reject;
        })
      }))
        .then(() => {
          this.setState({
            loaded: true
          })
        })
        .catch(() => {
          this.setState({
            error: true
          })
        })
    }

    render() {
      const { loaded, error } = this.state;
      if (error) return <div>Error</div>
      if (!loaded) return <div>Loading</div>
      return <Component {...this.props} />
    }
  }
}