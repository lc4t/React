import React from 'react';
import Navbar from './Navbar';
import Legend from './Legend';
import EmailDiv from './EmailDiv';
import CaptchaDiv from './CaptchaDiv';

var PasswordDiv = React.createClass({
  render: function() {
    return (
      <div id="password-div" className="am-form-group">
        <label htmlFor="password-input" className="am-u-sm-4 am-form-label">password</label>
        <div className="am-u-sm-4  am-u-sm-centered">
          <input id="password-input" type="password" className="am-form-field"  placeholder="********" />
        </div>
      </div>
    );
  }
});



var LoginButton = React.createClass({
  render: function() {
    return (
      <div id="submit-div" className="am-form-group">
        <div className="am-u-sm-10 am-u-sm-offset-4">
          <button type="submit" className="am-btn am-btn-default">Login</button>
        </div>
      </div>
    )
  }
});


var LoginForm = React.createClass({
  render: function() {
    return (
      <form id="Regist-form" className="am-form am-form-horizontal am-g" >
        <fieldset>
          <Legend name='Login' />
          <EmailDiv />
          <PasswordDiv />
          <CaptchaDiv />
          <LoginButton />
        </fieldset>
      </form>
    )
  }
});



var Login = React.createClass({
  render: function() {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }
});

export default Login;
