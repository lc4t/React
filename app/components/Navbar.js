import React from 'react';
// import {Link} from 'react-router'
var Navbar = React.createClass ({
  getInitialState: function(){
    return {
      onlineUsers: 0
    }
  },
  componentDidMount() {
    let socket = io.connect();
    socket.on('onlineUsers', (data) => {
      this.setState ({
        onlineUsers: data.onlineUsers
      })
    })
  },
  render: function() {
    return (
      <div>
        ONLINE:
        <span className='am-badge am-badge-danger am-radius'>{this.state.onlineUsers}</span>
      </div>
    );
  }
});

export default Navbar;
