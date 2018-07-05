import React from 'react';
import _ from 'lodash';

export default function makeLazy(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        display: false,
        _id: _.uniqueId()
      }
    }

    render() {
      const { containerStyle, activeView, ...otherProps } = this.props;
      const { display, _id } = this.state;
      return (
        <div style={containerStyle} className="lazy" id={_id}>
          { display && <Component {...otherProps} /> }
        </div>
      )
    }

    static getDerivedStateFromProps(props, state) {
      const { activeView } = props;
      const { display, _id } = state;
      if (!display && (activeView === _id)) {
        return {
          display : true
        }
      }
      return null;
    }
  }
}
