var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var async = require('async');

var User = require('./models/user');

var app = express();

app.set('port', process.env.PORT || 7777);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
var session = require('express-session');
var cookieParser = require('cookie-parser');
// var RedisStore = require('connect-redis')(session);
// import
var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

// session
app.use(cookieParser());
app.use(session({
    secret: 'dw4f4fFv4gduf6wSG4hsdb7A',
    name: 'IamSession',
    cookie: {maxAge: 800000 },
    resave: false,
    saveUninitialized: true,
}));

// database
var config = require('./config');
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

// POST /api/regist
app.post('/api/regist', function(req, res) {
    console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(req.body.captcha);
    var email = req.body.email;
    console.log(email);
    var password = req.body.password;
    var captcha = req.body.captcha;
    async.waterfall([
    function(callback) {
      User.findOne({ email: email }, function(err, user) {
        if (err) return res.statue(500).send({message: err});
        if (user) {
          return res.status(409).send({ message: user.email + ' is already in the database.' });
        }
        callback(err, email);
      });
    } ,

    function(email) {
      var user = new User({
        email: email,
        password: password,
        registTime: (new Date()).valueOf(),
        registIp: req.connection.remoteAddress
      });

      user.save(function(err) {
        if (err) return res.send({ message: err  });
        res.send({ message: email + ' has been added successfully!' });
        res.redirect('/login');
      });
    }
]);

});

// POST /api/login
app.post('/api/login', function(req, res) {
    console.log(req.body.email);
    // console.log(req.body.password);
    // console.log(req.body.captcha);
    var email = req.body.email;
    console.log(email);
    var password = req.body.password;
    var captcha = req.body.captcha;
    async.waterfall([
    function(callback) {
      User.findOne({ email: email }, function(err, user) {
        if (err) return res.statue(500).send({message: err});
        if (user) {
          console.log(user);
          if (password === user.password) {
            user.loginTimes += 1;
            lastLoginTime = (new Date()).valueOf();
            lastLoginIp = req.connection.remoteAddress;
            user.save();
            req.session.email = email;
            console.log(req.session);
            console.log(user);
            return res.status(200).send({ message: user.loginTimes + ' times login' });
          }
          else{
            return res.status(200).send('password error');
          }

        }
        else{
          return res.status(200).send({ message: email + ' is not regist' });
        }
        callback(err, email);
      });
    }
]);
});

// POST /api/check
app.post('/api/check', function(req, res) {
    console.log(req.session);
    return res.status(200).send({ message: req.session});
});


//react-router
app.use(function(req, res) {

  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html});
    res.send(page);
  });
});




// var favicon = require('serve-favicon');
// app.use(favicon(__dirname + '/public/favicon.ico'));





/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

  socket.on('disconnect', function() {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
