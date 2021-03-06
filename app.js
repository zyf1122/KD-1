var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var input_cg = require('./routes/input_cg');
var login_cg = require('./routes/login_cg');
var aregister = require('./routes/aregister');
var showxq = require('./routes/show-xq');
var logout = require('./routes/logout');
var quesList = require('./routes/quesList');
var shou = require('./routes/shou');
var xiu = require('./routes/xiu');
var show_zy = require('./routes/show_zy');
var mess = require('./routes/mess');
var alogin = require('./routes/alogin');
var user = require('./routes/retrieve');
var retrieve = require('./routes/retrieve');
var reset = require('./routes/reset');
var admin = require('./routes/admin');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
   saveUninitialized: true,
}));


app.use('/', routes);
app.use('/users', users);
app.use('/test',test);
app.use('/input_cg', input_cg);
app.use('/login_cg', login_cg);
app.use('/aregister', aregister);
app.use('/show-xq', showxq);
app.use('/logout', logout);
app.use('/quesList', quesList);
app.use('/show_zy',show_zy);
app.use('/shou',shou);
app.use('/xiu',xiu);
app.use('/mess',mess);
app.use('/alogin',alogin);
app.use('/user', user);
app.use('/retrieve', retrieve);
app.use('/reset', reset);
app.use('/admin', admin);


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
