(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(_reactRouter.RouteHandler, null);
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CaptchaImg = _react2["default"].createClass({
  displayName: "CaptchaImg",

  render: function render() {
    return _react2["default"].createElement("img", { src: "favicon.ico", alt: "captcha", width: "100%", height: "100%" });
  }
});

var CaptchaDiv = _react2["default"].createClass({
  displayName: "CaptchaDiv",

  render: function render() {
    return _react2["default"].createElement(
      "div",
      { id: "captcha-div", className: "am-form-group am-form-warning am-form-icon am-form-feedback" },
      _react2["default"].createElement(
        "label",
        { htmlFor: "captcha-input", className: "am-u-sm-4 am-form-label" },
        "captcha:"
      ),
      _react2["default"].createElement(
        "div",
        { className: "am-u-sm-2 am-u-sm-uncentered" },
        _react2["default"].createElement("input", { id: "captcha-input", name: this.props.name, type: "text", className: "am-form-field", placeholder: "captcha" }),
        _react2["default"].createElement("span", { id: "password-check-icon", className: "am-icon-warning" })
      ),
      _react2["default"].createElement(
        "div",
        { className: "am-u-sm-2 am-u-sm-uncentered" },
        _react2["default"].createElement(CaptchaImg, null)
      )
    );
  }
});

exports["default"] = CaptchaDiv;
module.exports = exports["default"];

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function checkEmail(value) {
  var reg = new RegExp(/^[a-zA-Z0-9_\\-\\.]+@[a-zA-Z0-9_\\-\\.]+\.[a-zA-Z0-9]+$/);
  if (reg.exec(value) === null) {
    return 0;
  } else {
    return 1;
  }
}

function StateCheckClassName(state) {
  if (state === 2) {
    return 'am-form-group am-form-icon am-form-feedback am-form-warning';
  } else if (state === 1) {
    return 'am-form-group am-form-icon am-form-feedback am-form-success';
  } else {
    return 'am-form-group am-form-icon am-form-feedback am-form-error';
  }
}

function StateCheckInputIconClass(state) {
  if (state === 2) {
    return 'am-icon-warning';
  } else if (state === 1) {
    return 'am-icon-check';
  } else {
    return 'am-icon-times';
  }
}

var EmailInput = _react2['default'].createClass({
  displayName: 'EmailInput',

  getInitialState: function getInitialState() {
    return {
      valied: this.props.initValied
    };
  },
  onFocus: function onFocus(e) {
    var check = checkEmail(e.target.value);

    this.setState({
      valied: check
    });
    this.props.callbackParent(check);
  },
  onChange: function onChange(e) {
    var check = checkEmail(e.target.value);
    this.setState({
      valied: check
    });
    this.props.callbackParent(check);
  },
  render: function render() {
    return _react2['default'].createElement('input', { id: 'email-input', name: this.props.name, type: 'email', className: 'am-form-field', placeholder: '@', onChange: this.onChange, onFocus: this.onFocus });
  }
});

var EmailDiv = _react2['default'].createClass({
  displayName: 'EmailDiv',

  getInitialState: function getInitialState() {
    return {
      valied: 2
    };
  },
  onChildChanged: function onChildChanged(newState) {
    this.setState({
      valied: newState
    });
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { id: 'email-div', className: StateCheckClassName(this.state.valied) },
      _react2['default'].createElement(
        'label',
        { htmlFor: 'email-label', className: 'am-u-sm-4 am-form-label' },
        'email'
      ),
      _react2['default'].createElement(
        'div',
        { className: 'am-u-sm-4 am-u-sm-centered' },
        _react2['default'].createElement(EmailInput, {
          name: this.props.name,
          initValied: this.state.valied,
          callbackParent: this.onChildChanged }),
        _react2['default'].createElement('span', { id: 'email-check-icon', className: StateCheckInputIconClass(this.state.valied) })
      )
    );
  }
});

exports['default'] = EmailDiv;
module.exports = exports['default'];

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var Index = _react2['default'].createClass({
  displayName: 'Index',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_Navbar2['default'], null),
      _react2['default'].createElement(
        'div',
        null,
        'This is index page.'
      )
    );
  }
});

exports['default'] = Index;
module.exports = exports['default'];

},{"./Navbar":7,"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Legend = _react2['default'].createClass({
  displayName: 'Legend',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'legend',
        null,
        this.props.name
      )
    );
  }
});

exports['default'] = Legend;
module.exports = exports['default'];

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Legend = require('./Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _EmailDiv = require('./EmailDiv');

var _EmailDiv2 = _interopRequireDefault(_EmailDiv);

var _CaptchaDiv = require('./CaptchaDiv');

var _CaptchaDiv2 = _interopRequireDefault(_CaptchaDiv);

var PasswordDiv = _react2['default'].createClass({
  displayName: 'PasswordDiv',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { id: 'password-div', className: 'am-form-group' },
      _react2['default'].createElement(
        'label',
        { htmlFor: 'password-input', className: 'am-u-sm-4 am-form-label' },
        'password'
      ),
      _react2['default'].createElement(
        'div',
        { className: 'am-u-sm-4  am-u-sm-centered' },
        _react2['default'].createElement('input', { id: 'password-input', name: this.props.name, type: 'password', className: 'am-form-field', placeholder: '********' })
      )
    );
  }
});

var LoginButton = _react2['default'].createClass({
  displayName: 'LoginButton',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { id: 'submit-div', className: 'am-form-group' },
      _react2['default'].createElement(
        'div',
        { className: 'am-u-sm-10 am-u-sm-offset-4' },
        _react2['default'].createElement(
          'button',
          { type: 'submit', className: 'am-btn am-btn-default' },
          'Login'
        )
      )
    );
  }
});

var LoginForm = _react2['default'].createClass({
  displayName: 'LoginForm',

  render: function render() {
    return _react2['default'].createElement(
      'form',
      { id: 'Regist-form', className: 'am-form am-form-horizontal am-g', action: '/api/login', method: 'post' },
      _react2['default'].createElement(
        'fieldset',
        null,
        _react2['default'].createElement(_Legend2['default'], { name: 'Login' }),
        _react2['default'].createElement(_EmailDiv2['default'], { name: 'email' }),
        _react2['default'].createElement(PasswordDiv, { name: 'password' }),
        _react2['default'].createElement(_CaptchaDiv2['default'], { name: 'captcha' }),
        _react2['default'].createElement(LoginButton, null)
      )
    );
  }
});

var Login = _react2['default'].createClass({
  displayName: 'Login',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(LoginForm, null)
    );
  }
});

exports['default'] = Login;
module.exports = exports['default'];

},{"./CaptchaDiv":2,"./EmailDiv":3,"./Legend":5,"./Navbar":7,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _OnlineUsers = require('./OnlineUsers');

var _OnlineUsers2 = _interopRequireDefault(_OnlineUsers);

var _reactRouter = require('react-router');

var Navbar = _react2['default'].createClass({
  displayName: 'Navbar',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'header',
        { className: 'am-topbar' },
        _react2['default'].createElement(
          'h1',
          { className: 'am-topbar-brand' },
          _react2['default'].createElement(
            _reactRouter.Link,
            { to: '/' },
            'Web Console'
          ),
          _react2['default'].createElement(_OnlineUsers2['default'], null)
        ),
        _react2['default'].createElement(
          'button',
          { className: 'am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only', 'data-am-collapse': '{target: \'#doc-topbar-collapse\'}' },
          _react2['default'].createElement(
            'span',
            { className: 'am-sr-only' },
            '导航切换'
          ),
          ' ',
          _react2['default'].createElement('span', { className: 'am-icon-bars' })
        ),
        _react2['default'].createElement(
          'div',
          { className: 'am-collapse am-topbar-collapse', id: 'doc-topbar-collapse' },
          _react2['default'].createElement(
            'ul',
            { className: 'am-nav am-nav-pills am-topbar-nav' },
            _react2['default'].createElement(
              'li',
              { className: 'am-active' },
              _react2['default'].createElement(
                'a',
                { href: '#' },
                'index'
              )
            ),
            _react2['default'].createElement(
              'li',
              null,
              _react2['default'].createElement(
                _reactRouter.Link,
                { to: '/#' },
                'Other'
              )
            ),
            _react2['default'].createElement(
              'li',
              { className: 'am-dropdown', 'data-am-dropdown': true },
              _react2['default'].createElement(
                'a',
                { className: 'am-dropdown-toggle', 'data-am-dropdown-toggle': true, href: 'javascript:;' },
                'things ',
                _react2['default'].createElement('span', { className: 'am-icon-caret-down' })
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'am-dropdown-content' },
                _react2['default'].createElement(
                  'li',
                  { className: 'am-dropdown-header' },
                  'title here'
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/#' },
                    '1'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'am-active' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/#' },
                    '2'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/#' },
                    '3'
                  )
                ),
                _react2['default'].createElement(
                  'li',
                  { className: 'am-disabled' },
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/#' },
                    '4'
                  )
                ),
                _react2['default'].createElement('li', { className: 'am-divider' }),
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/' },
                    '5'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'form',
            { className: 'am-topbar-form am-topbar-left am-form-inline', role: 'search' },
            _react2['default'].createElement(
              'div',
              { className: 'am-form-group' },
              _react2['default'].createElement('input', { type: 'text', className: 'am-form-field am-input-sm', placeholder: 'search' })
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'am-topbar-right' },
            _react2['default'].createElement(
              'div',
              { className: 'am-dropdown', 'data-am-dropdown': '{boundary: \'.am-topbar\'}' },
              _react2['default'].createElement(
                'button',
                { className: 'am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle', 'data-am-dropdown-toggle': true },
                ' Others ',
                _react2['default'].createElement('span', { className: 'am-icon-caret-down' })
              ),
              _react2['default'].createElement(
                'ul',
                { className: 'am-dropdown-content' },
                _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                    _reactRouter.Link,
                    { to: '/regist' },
                    'Regist'
                  )
                )
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'am-topbar-right' },
            _react2['default'].createElement(
              _reactRouter.Link,
              { to: '/login' },
              _react2['default'].createElement(
                'button',
                { className: 'am-btn am-btn-primary am-topbar-btn am-btn-sm' },
                'Login'
              )
            )
          )
        )
      )
    );
  }
});

exports['default'] = Navbar;
module.exports = exports['default'];
/*<li><a href="#">随便看看</a></li>*/

},{"./OnlineUsers":8,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var OnlineUsers = _react2['default'].createClass({
  displayName: 'OnlineUsers',

  getInitialState: function getInitialState() {
    return {
      onlineUsers: 0
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    var socket = io.connect();
    socket.on('onlineUsers', function (data) {
      _this.setState({
        onlineUsers: data.onlineUsers
      });
    });
  },
  render: function render() {
    return _react2['default'].createElement(
      'span',
      { className: 'badge-up am-badge am-badge-success' },
      this.state.onlineUsers
    );
  }
});

exports['default'] = OnlineUsers;
module.exports = exports['default'];

},{"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function checkPasswordFormat(passwordFirst) {
  var reg = new RegExp(/^.{12,20}$/);
  if (reg.exec(passwordFirst) === null) {
    return [0, "len(password) must in [12,21)"];
  } else {
    return [1, ""];
  }
};
function checkPasswordSame(passwordFirst, passwordSecond) {
  if (passwordFirst === passwordSecond) {
    return [1, ""];
  } else {
    return [0, "Input not same."];
  }
}

function StateCheckClassName(state) {
  if (state === 2) {
    return 'am-form-group am-form-icon am-form-feedback am-form-warning';
  } else if (state === 1) {
    return 'am-form-group am-form-icon am-form-feedback am-form-success';
  } else {
    return 'am-form-group am-form-icon am-form-feedback am-form-error';
  }
}

function StateCheckInputIconClass(state) {
  if (state === 2) {
    return 'am-icon-warning';
  } else if (state === 1) {
    return 'am-icon-check';
  } else {
    return 'am-icon-times';
  }
}

var PasswordInputFirst = _react2["default"].createClass({
  displayName: "PasswordInputFirst",

  getInitialState: function getInitialState() {
    return {
      formatCheckState: this.props.valied,
      formatCheckString: this.props.formatCheckString
    };
  },
  onFocus: function onFocus(e) {
    var checkList = checkPasswordFormat(e.target.value);

    this.setState({
      formatCheckState: checkList[0],
      formatCheckString: checkList[1]
    });
    this.props.formatCallback(checkList);
    this.props.setPasswordFirst(e.target.value);
  },
  onChange: function onChange(e) {
    var checkList = checkPasswordFormat(e.target.value);
    this.setState({
      formatCheckState: checkList[0],
      formatCheckString: checkList[1]
    });
    this.props.formatCallback(checkList);
    this.props.setPasswordFirst(e.target.value);
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      { id: "password-first-div", className: StateCheckClassName(this.state.formatCheckState) },
      _react2["default"].createElement(
        "label",
        { htmlFor: "password-first-input", className: "am-u-sm-4 am-form-label" },
        "password"
      ),
      _react2["default"].createElement(
        "div",
        { className: "am-u-sm-4  am-u-sm-uncentered" },
        _react2["default"].createElement("input", { id: "password-first-input", name: this.props.name, type: "password", className: "am-form-field", placeholder: "********", onFocus: this.onFocus, onChange: this.onChange }),
        _react2["default"].createElement("span", { id: "password-check-icon", className: StateCheckInputIconClass(this.state.formatCheckState) })
      ),
      _react2["default"].createElement(
        "div",
        { id: "password-format-check", className: "am-u-sm-4  am-u-sm-uncentered am-text-danger" },
        this.state.formatCheckString
      )
    );
  }
});

var PasswordInputAgain = _react2["default"].createClass({
  displayName: "PasswordInputAgain",

  getInitialState: function getInitialState() {
    return {
      sameCheckState: 2,
      sameCheckString: "passwordSameCheckString",
      passwordFirst: this.props.passwordFirst
    };
  },
  onFocus: function onFocus(e) {
    this.props.setPasswordSecond(e.target.value);

    // var checkList = checkPasswordSame(this.state.passwordFirst, e.target.value);
    // this.props.sameCallback(checkList);
    // this.setState({
    //   sameCheckState: checkList[0],
    //   sameCheckString: checkList[1],
    //   passwordFirst: this.props.passwordFirst
    // });
  },
  onChange: function onChange(e) {
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
  sameCheckAgain: function sameCheckAgain(first, second) {
    var checkList = checkPasswordSame(first, second);
    console.log(first);
    console.log(second);
    this.setState({
      sameCheckState: checkList[0],
      sameCheckString: checkList[1]
    });
    this.props.sameCallback(checkList);
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      { id: "password-again-div", className: StateCheckClassName(this.state.sameCheckState) },
      _react2["default"].createElement(
        "label",
        { htmlFor: "password-again-input", className: "am-u-sm-4 am-form-label" },
        "password"
      ),
      _react2["default"].createElement(
        "div",
        { className: "am-u-sm-4  am-u-sm-uncentered" },
        _react2["default"].createElement("input", { id: "password-again-input", name: this.props.name, type: "password", className: "am-form-field", placeholder: "********", onFocus: this.onFocus, onChange: this.onChange }),
        _react2["default"].createElement("span", { id: "password-check-icon", className: StateCheckInputIconClass(this.state.sameCheckState) })
      ),
      _react2["default"].createElement(
        "div",
        { id: "password-again-check", className: "am-u-sm-4  am-u-sm-uncentered am-text-danger" },
        this.state.sameCheckString
      )
    );
  }
});

var PasswordCheck = _react2["default"].createClass({
  displayName: "PasswordCheck",

  getInitialState: function getInitialState() {
    return {
      formatCheckState: 2,
      sameCheckState: 2,
      formatCheckString: "formatCheckString",
      sameCheckString: "sameCheckString",
      passwordFirst: "",
      passwordSecond: ""
    };
  },
  formatCallback: function formatCallback(checkList) {
    this.setState({
      formatCheckState: checkList[0],
      formatCheckString: checkList[1]
    });
  },
  sameCallback: function sameCallback(checkList) {
    this.setState({
      sameCheckState: checkList[0],
      sameCheckString: checkList[1]
    });
  },
  setPasswordFirst: function setPasswordFirst(password) {

    this.setState({
      passwordFirst: password
    }, function () {
      this.check();
    });
  },
  check: function check() {
    this.refs.passwordAgainCheck.sameCheckAgain(this.state.passwordFirst, this.state.passwordSecond);
  },
  setPasswordSecond: function setPasswordSecond(password) {
    this.setState({
      passwordSecond: password
    }, function () {
      this.check();
    });
  },

  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(PasswordInputFirst, { name: this.props.name, formatCheckState: this.state.formatCheckState, formatCheckString: this.state.formatCheckString, formatCallback: this.formatCallback, setPasswordFirst: this.setPasswordFirst }),
      _react2["default"].createElement(PasswordInputAgain, { name: this.props.nameCheck, ref: "passwordAgainCheck", sameCheckState: this.state.sameCheckState, sameCheckString: this.state.sameCheckString, sameCallback: this.sameCallback, passwordFirst: this.state.passwordFirst, setPasswordSecond: this.setPasswordSecond })
    );
  }
});

exports["default"] = PasswordCheck;
module.exports = exports["default"];

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Legend = require('./Legend');

var _Legend2 = _interopRequireDefault(_Legend);

var _EmailDiv = require('./EmailDiv');

var _EmailDiv2 = _interopRequireDefault(_EmailDiv);

var _CaptchaDiv = require('./CaptchaDiv');

var _CaptchaDiv2 = _interopRequireDefault(_CaptchaDiv);

var _PasswordCheck = require('./PasswordCheck');

var _PasswordCheck2 = _interopRequireDefault(_PasswordCheck);

var RegistButton = _react2['default'].createClass({
  displayName: 'RegistButton',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { id: 'submit-div', className: 'am-form-group' },
      _react2['default'].createElement(
        'div',
        { className: 'am-u-sm-10 am-u-sm-offset-4' },
        _react2['default'].createElement(
          'button',
          { type: 'submit', className: 'am-btn am-btn-default' },
          'Regist'
        )
      )
    );
  }
});

var Regist = _react2['default'].createClass({
  displayName: 'Regist',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(Form, null)
    );
  }
});

var Form = _react2['default'].createClass({
  displayName: 'Form',

  render: function render() {
    return _react2['default'].createElement(
      'form',
      { id: 'Regist-form', className: 'am-form am-form-horizontal am-g', action: '/api/regist', method: 'post' },
      _react2['default'].createElement(
        'fieldset',
        null,
        _react2['default'].createElement(_Legend2['default'], { name: 'Regist' }),
        _react2['default'].createElement(_EmailDiv2['default'], { name: 'email' }),
        _react2['default'].createElement(_PasswordCheck2['default'], { name: 'password', nameCheck: 'password-check' }),
        _react2['default'].createElement(_CaptchaDiv2['default'], { name: 'captcha' }),
        _react2['default'].createElement(RegistButton, null)
      )
    );
  }
});

exports['default'] = Regist;
module.exports = exports['default'];

},{"./CaptchaDiv":2,"./EmailDiv":3,"./Legend":5,"./PasswordCheck":9,"react":"react"}],11:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":12,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsIndex = require('./components/Index');

var _componentsIndex2 = _interopRequireDefault(_componentsIndex);

var _componentsLogin = require('./components/Login');

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsRegist = require('./components/Regist');

var _componentsRegist2 = _interopRequireDefault(_componentsRegist);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsIndex2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/regist', handler: _componentsRegist2['default'] })
);
module.exports = exports['default'];

},{"./components/App":1,"./components/Index":4,"./components/Login":6,"./components/Regist":10,"react":"react","react-router":"react-router"}]},{},[11]);
