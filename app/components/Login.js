import React from 'react';
import Navbar from './Navbar';
import Legend from './Legend';
import EmailDiv from './EmailDiv';

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

var CaptchaImg = React.createClass({
  render: function()
  {
    return (
      <img src="favicon.ico" alt="captcha" width="100%" height="100%" />
    )
  }
});

var CaptchaDiv = React.createClass({
  render: function() {
    return (
      <div id="captcha-div" className="am-form-group am-form-warning am-form-icon am-form-feedback">
        <label htmlFor="captcha-input" className="am-u-sm-4 am-form-label">captcha:</label>
        <div className="am-u-sm-2 am-u-sm-uncentered" >
            <input id="captcha-input" type="text" className="am-form-field" placeholder="captcha" />
            <span id="password-check-icon" className="am-icon-warning"></span>
        </div>
        <div className="am-u-sm-2 am-u-sm-uncentered">
          <CaptchaImg />
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
