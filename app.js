let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cors = require('cors');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let engines = require('consolidate');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let storyRouter = require('./routes/story');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.pug);
app.set('view engine', 'html');


// enables all CORS requests if needed
app.use(cors({credentials: true, origin: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(usersRouter);
app.use(storyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
