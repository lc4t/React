import React from 'react';
import Navbar from './Navbar';

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <div>
          This is index page.
        </div>
      </div>
    );
  }
});


export default Index;
