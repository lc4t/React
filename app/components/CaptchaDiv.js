import React from 'react';

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

export default CaptchaDiv;
