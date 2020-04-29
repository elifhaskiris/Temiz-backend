var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/temiz', {useNewUrlParser: true, useUnifiedTopology: true});


// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.route('/persons')
    .get((req, res) => {
      let sgokell = ["sgokell"];
      let cybeleOzcan = ["cybeleozcan"];
      let elif = ["elifhaskiris"];
      let akif = ["akifkebabci"];
      let kadir = ["kadirsav"];

      let personObject = {
          name : ''
      };

      let getPerson = (array) => {
        let mPerson = Object.assign({}, personObject);
        mPerson.name = array[0];
        return mPerson;
      };

      let persons = [
        sgokell, cybeleOzcan, elif, akif, kadir, sgokell, cybeleOzcan, elif, akif, kadir, sgokell, cybeleOzcan, elif, akif, kadir
      ];
        persons = persons.map(person => {
        return getPerson(person);
      });
      res.send({
          persons
      });
    });

//app.use('/', indexRouter);


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

app.listen(3000, err => {
    if (err) {
        console.error(err);
    } else {
        console.log('server started listening on Port : 3000');
    }
});
