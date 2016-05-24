var Form = React.createClass ({
  render: function() {
    return (
      <form id="login-form" className="am-form am-form-horizontal am-g" >
        <fieldset>
          <Legend name="Login" />
          <EmailDiv />
          <PasswordDiv />
          <LoginButton />
        </fieldset>
      </form>
    )
  }
});

// var Navbar = React.createClass ({
//   render: function() {
//     return (
//       <ol class="am-breadcrumb am-breadcrumb-slash am-text-lg">
//         <li class="am-active"><a href="#">Login</a></li>
//         <li><a href="#">分类</a></li>
//         <li><a href="#">内容</a></li>
//       </ol>
//     )
//   }
// })


var Legend = React.createClass({
  render: function() {
    return (
      <div>
        <legend>{this.props.name}</legend>
      </div>
    )
  }
});

function checkEmail(value)
{
  var reg = /^[a-zA-Z0-9_\\-\\.]+@[a-zA-Z0-9_\\-\\.]+\.[a-zA-Z0-9]+$/;
  // var reg = '/^([a-zA-Z0-9_\\-\\.])+@([a-zA-Z0-9_\\-])+((\\.[a-zA-Z0-9_\\-]{2,3}){1,2})$/';
  console.log(value.match(reg));

  if (value.match(reg) != null)
  {
    return 1;
  }
  else
  {
    return 0;
  }
}

var EmailInput = React.createClass ({
  getInitialState: function(){
    return {
      valied: this.props.initValied
    }
  },
  onFocus: function() {
    var check = checkEmail(this.refs.emailInput.value);

    this.setState({
      valied: check
    });
    this.props.callbackParent(check);
  },
  onChange: function() {
    var check = checkEmail(this.refs.emailInput.value);
    this.setState({
      valied: check
    });
    this.props.callbackParent(check);
  },
  render: function () {
    return (
      <input id="email-input" ref="emailInput" type="email"  className="am-form-field"  placeholder="@" onChange={this.onChange} onFocus={this.onFocus}/>
    )
  }
});



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
};


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
          initValied={this.state.valied}
          callbackParent={this.onChildChanged} />
          {this.state.valied===1 ? <span id="email-check-icon" className="am-icon-check"></span> : ''}

        </div>
      </div>
    );
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


var LoginButton = React.createClass({
  render: function() {
    return (
      <div id="submit-div" className="am-form-group">
        <div className="am-u-sm-10 am-u-sm-offset-4">
          <button type="submit" className="am-btn am-btn-default">Login</button>
        </div>
      </div>
    );
  }
});


ReactDOM.render(
  <Form />,
  document.body
);
