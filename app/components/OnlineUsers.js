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
        <span className='badge-up am-badge am-badge-success'>{this.state.onlineUsers}</span>
    );
  }
});

export default OnlineUsers;
