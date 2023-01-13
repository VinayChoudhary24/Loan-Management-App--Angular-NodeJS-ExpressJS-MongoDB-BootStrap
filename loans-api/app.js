var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Creating the link/Connection
// Connecting to mongoDB via ExpressJS
var mongoose = require('mongoose');
// Loan-Manager is the Database Name Given in Compass OR Atlas
mongoose.connect('mongodb+srv://Madani-Loan:l2L91gJKdH9gf9Co@cluster0.qeilnto.mongodb.net/test');

var indexRouter = require('./routes/index');

// Importing all the routers From Routes Folder
var usersRouter = require('./routes/users.router');
var customersRouter = require('./routes/customers.router');
var settingsRouter = require('./routes/settings.router');
var paymentsRouter = require('./routes/payments.router');
var loansRouter = require('./routes/loans.router');
var invoicesRouter = require('./routes/invoices.router');

var auditRouter = require('./routes/audit.router');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// To Request MongoDB from customer.router.js -var customersRouter = require('./routes/customers.router');
app.use('/customers', customersRouter);

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
