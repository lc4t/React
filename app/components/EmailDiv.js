import React from 'react';


function checkEmail(value)
{
  var reg = new RegExp(/^[a-zA-Z0-9_\\-\\.]+@[a-zA-Z0-9_\\-\\.]+\.[a-zA-Z0-9]+$/);
  if (reg.exec(value) === null)
  {
    return 0;
  }
  else
  {
    return 1;
  }
}

function StateCheckClassName(state)
{
  if (state === 2)
  {
    return 'am-form-group am-form-icon am-form-feedback am-form-warning';
  }
  else if (state === 1)
  {
    return 'am-form-group am-form-icon am-form-feedback am-form-success';
  }
  else
  {
    return 'am-form-group am-form-icon am-form-feedback am-form-error';
  }
}

function StateCheckInputIconClass(state)
{
  if (state === 2)
  {
    return 'am-icon-warning';
  }
  else if (state === 1)
  {
    return 'am-icon-check';
  }
  else
  {
    return 'am-icon-times';
  }
}


var EmailInput = React.createClass ({
  getInitialState: function(){
    return {
      valied: this.props.initValied
    }
  },
  onFocus: function(e) {
    var check = checkEmail(e.target.value);

    this.setState({
      valied: check
    });
    this.props.callbackParent(check);
  },
  onChange: function(e) {
    var check = checkEmail(e.target.value);
    this.setState({
      valied: check
    });
    this.props.callbackParent(check);
  },
  render: function () {
    return (
      <input id="email-input" name={this.props.name} type="email"  className="am-form-field"  placeholder="@" onChange={this.onChange} onFocus={this.onFocus}/>
    )
  }
});

var EmailDiv = React.createClass({
  getInitialState: function() {
    return {
      valied: 2
    };
  },
  onChildChanged: function (newState) {
    this.setState({
      valied: newState
    });
  },

  render: function() {
    return (
      <div id="email-div" className={StateCheckClassName(this.state.valied)} >
        <label htmlFor="email-label" className="am-u-sm-4 am-form-label">email</label>
        <div className="am-u-sm-4 am-u-sm-centered">
          <EmailInput
          name={this.props.name}
          initValied={this.state.valied}
          callbackParent={this.onChildChanged} />
          <span id="email-check-icon" className={StateCheckInputIconClass(this.state.valied)}></span>

        </div>
      </div>
    );
  }
});

export default EmailDiv;
