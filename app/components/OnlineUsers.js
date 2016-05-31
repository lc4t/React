import React from 'react';
var OnlineUsers = React.createClass ({
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
        <span className='am-badge am-badge-danger am-radius'>{this.state.onlineUsers}</span>
    );
  }
});

export default OnlineUsers;
