require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var examsRouter = require('./routes/exams');

//creats express app
var app = express();

const dbo = require("./db/index");

app.use(logger('dev'));
app.use(cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', examsRouter);
// app.use('/users', usersRouter);

// Connect to Database
mongoose.connect(process.env.MONG_URI)
.then(() => {
  console.log('connected to database')
  //listen  to port
//   app.listen(process.env.PORT, () =>{
//     console.log('listening for request on port', process.env.PORT)
//   })
})
.catch((error) =>{
  console.log(error)
});

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

app.listen(() => console.log(`Server running on port 3000`))

module.exports = app;

//install nodemon
//"dev": "nodemon app.js"