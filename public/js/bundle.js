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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

// import {Link} from 'react-router'
var Navbar = _react2['default'].createClass({
  displayName: 'Navbar',

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
      'div',
      null,
      'ONLINE:',
      _react2['default'].createElement(
        'span',
        { className: 'am-badge am-badge-danger am-radius' },
        this.state.onlineUsers
      )
    );
  }
});

exports['default'] = Navbar;
module.exports = exports['default'];

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

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

var Form = _react2['default'].createClass({
  displayName: 'Form',

  render: function render() {
    return _react2['default'].createElement(
      'form',
      { id: 'Regist-form', className: 'am-form am-form-horizontal am-g' },
      _react2['default'].createElement(
        'fieldset',
        null,
        _react2['default'].createElement(Legend, { name: 'Regist' }),
        _react2['default'].createElement(EmailDiv, null),
        _react2['default'].createElement(PasswordDiv, null),
        _react2['default'].createElement(RegistButton, null)
      )
    );
  }
});

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
    return _react2['default'].createElement('input', { id: 'email-input', ref: 'emailInput', type: 'email', className: 'am-form-field', placeholder: '@', onChange: this.onChange, onFocus: this.onFocus });
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
          initValied: this.state.valied,
          callbackParent: this.onChildChanged }),
        _react2['default'].createElement('span', { id: 'email-check-icon', className: StateCheckInputIconClass(this.state.valied) })
      )
    );
  }
});

var PasswordDiv = _react2['default'].createClass({
  displayName: 'PasswordDiv',

  render: function render() {
    return _react2['default'].createElement(
      'div',
      { id: 'password-div', className: 'am-form-group am-form-warning am-form-icon am-form-feedback' },
      _react2['default'].createElement(
        'label',
        { htmlFor: 'password-input', className: 'am-u-sm-4 am-form-label' },
        'password'
      ),
      _react2['default'].createElement(
        'div',
        { className: 'am-u-sm-4  am-u-sm-centered' },
        _react2['default'].createElement('input', { id: 'password-input', type: 'password', className: 'am-form-field', placeholder: '********' }),
        _react2['default'].createElement('span', { id: 'password-check-icon', className: 'am-icon-warning' })
      )
    );
  }
});

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
      _react2['default'].createElement(_Navbar2['default'], null),
      _react2['default'].createElement(Form, null)
    );
  }
});

exports['default'] = Regist;
module.exports = exports['default'];

},{"./Navbar":2,"react":"react"}],4:[function(require,module,exports){
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

},{"./routes":5,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
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

var _componentsRegist = require('./components/Regist');

var _componentsRegist2 = _interopRequireDefault(_componentsRegist);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsRegist2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/regist', handler: _componentsRegist2['default'] })
);
module.exports = exports['default'];

},{"./components/App":1,"./components/Regist":3,"react":"react","react-router":"react-router"}]},{},[4]);
