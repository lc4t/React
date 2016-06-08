import React from 'react';

function checkPasswordFormat(passwordFirst)
{
  var reg = new RegExp(/^.{12,20}$/);
  if (reg.exec(passwordFirst) === null)
  {
    return [0, "len(password) must in [12,21)"];
  }
  else
  {
    return [1, ""];
  }
};
function checkPasswordSame(passwordFirst, passwordSecond)
{
  if (passwordFirst === passwordSecond)
  {
    return [1, ""];
  }
  else
  {
    return [0, "Input not same."];
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


var PasswordInputFirst = React.createClass({
  getInitialState : function(){
    return {
      formatCheckState: this.props.valied,
      formatCheckString: this.props.formatCheckString
    }
  },
  onFocus: function(e) {
    var checkList = checkPasswordFormat(e.target.value);

    this.setState({
      formatCheckState: checkList[0],
      formatCheckString: checkList[1]
    });
    this.props.formatCallback(checkList);
    this.props.setPasswordFirst(e.target.value);
  },
  onChange: function(e) {
    var checkList = checkPasswordFormat(e.target.value);
    this.setState({
      formatCheckState: checkList[0],
      formatCheckString: checkList[1]
    });
    this.props.formatCallback(checkList);
    this.props.setPasswordFirst(e.target.value);
  },
  render: function() {
    return (
      <div id="password-first-div" className={StateCheckClassName(this.state.formatCheckState)}>
        <label htmlFor="password-first-input" className="am-u-sm-4 am-form-label">password</label>
        <div className="am-u-sm-4  am-u-sm-uncentered">
          <input id="password-first-input" name={this.props.name} type="password" className="am-form-field"  placeholder="********" onFocus={this.onFocus} onChange={this.onChange} />
          <span id="password-check-icon" className={StateCheckInputIconClass(this.state.formatCheckState)}></span>
        </div>
        <div id="password-format-check" className="am-u-sm-4  am-u-sm-uncentered am-text-danger">
          {this.state.formatCheckString}
        </div>
      </div>
    )
  }
});

var PasswordInputAgain = React.createClass({
  getInitialState : function(){
    return {
      sameCheckState: 2,
      sameCheckString: "passwordSameCheckString",
      passwordFirst: this.props.passwordFirst
    }
  },
  onFocus: function(e) {
    this.props.setPasswordSecond(e.target.value);

    // var checkList = checkPasswordSame(this.state.passwordFirst, e.target.value);
    // this.props.sameCallback(checkList);
    // this.setState({
    //   sameCheckState: checkList[0],
    //   sameCheckString: checkList[1],
    //   passwordFirst: this.props.passwordFirst
    // });

  },
  onChange: function(e) {
    this.props.setPasswordSecond(e.target.value);
    // console.log('onchange:'+this.state.passwordFirst);
    // var checkList = checkPasswordSame(this.state.passwordFirst, e.target.value);
    //
    // this.setState({
    //   sameCheckState: checkList[0],
    //   sameCheckString: checkList[1]
    // });
    // this.props.sameCallback(checkList);
  },
  sameCheckAgain: function(first, second){
    var checkList = checkPasswordSame(first, second);
    console.log(first);
    console.log(second);
    this.setState({
      sameCheckState: checkList[0],
      sameCheckString: checkList[1]
    });
    this.props.sameCallback(checkList);
  },
  render: function() {
    return (
      <div id="password-again-div" className={StateCheckClassName(this.state.sameCheckState)}>
        <label htmlFor="password-again-input" className="am-u-sm-4 am-form-label">password</label>
        <div className="am-u-sm-4  am-u-sm-uncentered">
          <input id="password-again-input" name={this.props.name} type="password" className="am-form-field"  placeholder="********" onFocus={this.onFocus} onChange={this.onChange} />
          <span id="password-check-icon" className={StateCheckInputIconClass(this.state.sameCheckState)}></span>
        </div>
        <div id="password-again-check" className="am-u-sm-4  am-u-sm-uncentered am-text-danger">
          {this.state.sameCheckString}
        </div>
      </div>
    )
  }
});

var PasswordCheck = React.createClass({
  getInitialState: function()
  {
    return {
      formatCheckState: 2,
      sameCheckState: 2,
      formatCheckString: "formatCheckString",
      sameCheckString: "sameCheckString",
      passwordFirst: "",
      passwordSecond: ""
    }
  },
  formatCallback: function (checkList) {
    this.setState({
      formatCheckState: checkList[0],
      formatCheckString: checkList[1]
    });
  },
  sameCallback: function (checkList) {
    this.setState({
      sameCheckState: checkList[0],
      sameCheckString: checkList[1]
    });
  },
  setPasswordFirst: function (password)
  {

    this.setState({
      passwordFirst: password
    }, function(){this.check()});

  },
  check: function (){
    this.refs.passwordAgainCheck.sameCheckAgain(this.state.passwordFirst, this.state.passwordSecond);
  },
  setPasswordSecond: function (password)
  {
    this.setState({
      passwordSecond: password
    }, function(){this.check()});
  },

  render: function(){
    return (
      <div>
        <PasswordInputFirst name={this.props.name} formatCheckState={this.state.formatCheckState} formatCheckString={this.state.formatCheckString} formatCallback={this.formatCallback} setPasswordFirst={this.setPasswordFirst} />
        <PasswordInputAgain name={this.props.nameCheck} ref="passwordAgainCheck" sameCheckState={this.state.sameCheckState} sameCheckString={this.state.sameCheckString} sameCallback={this.sameCallback} passwordFirst={this.state.passwordFirst} setPasswordSecond={this.setPasswordSecond} />
      </div>
    )
  }
});

export default PasswordCheck;
