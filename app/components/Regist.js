import React from 'react';
import OnlineUsers from './OnlineUsers';
import Legend from './Legend';
import EmailDiv from './EmailDiv';



var Form = React.createClass ({
  render: function() {
    return (
      <form id="Regist-form" className="am-form am-form-horizontal am-g" >
        <fieldset>
          <Legend name="Regist" />
          <EmailDiv />
          <PasswordDiv />
          <RegistButton />
        </fieldset>
      </form>
    )
  }
});






var PasswordDiv = React.createClass({
  render: function() {
    return (
      <div id="password-div" className="am-form-group am-form-warning am-form-icon am-form-feedback">
        <label htmlFor="password-input" className="am-u-sm-4 am-form-label">password</label>
        <div className="am-u-sm-4  am-u-sm-centered">
          <input id="password-input" type="password" className="am-form-field"  placeholder="********" />
          <span id="password-check-icon" className="am-icon-warning"></span>
        </div>
      </div>
    );
  }
});


var RegistButton = React.createClass({
  render: function() {
    return (
      <div id="submit-div" className="am-form-group">
        <div className="am-u-sm-10 am-u-sm-offset-4">
          <button type="submit" className="am-btn am-btn-default">Regist</button>
        </div>
      </div>
    );
  }
});


var Regist = React.createClass({
  render: function() {
    return (
      <div>
        online:<OnlineUsers />
        <Form />
      </div>
    );
  }
});


export default Regist;
