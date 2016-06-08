import React from 'react';
import Legend from './Legend';
import EmailDiv from './EmailDiv';
import CaptchaDiv from './CaptchaDiv';
import PasswordCheck from './PasswordCheck';







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
        <Form />
      </div>
    );
  }
});


var Form = React.createClass ({
  render: function() {
    return (
      <form id="Regist-form" className="am-form am-form-horizontal am-g" action="/api/regist" method="post">
        <fieldset>
          <Legend name="Regist" />
          <EmailDiv name="email" />
          <PasswordCheck name="password" nameCheck="password-check" />
          <CaptchaDiv name="captcha"/>
          <RegistButton />
        </fieldset>
      </form>
    )
  }
});


export default Regist;
