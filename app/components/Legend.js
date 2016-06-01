import React from 'react';


var Legend = React.createClass({
  render: function() {
    return (
      <div>
        <legend>{this.props.name}</legend>
      </div>
    )
  }
});

export default Legend;
