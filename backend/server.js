const dotenv = require('dotenv');
dotenv.config()
const methodOverride = require('method-override');
const express = require('express');
const mongoose = require('mongoose');
const colors = require ("colors");
const cors = require ("cors");
const cookieParser = require('cookie-parser');
const bodyParser= require('body-parser')
const cookieSession = require('cookie-session')
const session = require('express-session');
// const logger = require("morgan");
const morgan = require("morgan");
const path = require('path');

// const morgan = require('morgan');
const { logger } = require('./middlewares/logEvents');

const connectDB = require("./config/db.config.js");
const { Session } = require('inspector');
dotenv.config({ path: './config/config.env'});
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    // dotenv.config({ path:  '../.'})
    // app.use(logger('dev'));
};

if (process.env.NODE_ENV === 'production') {
      // app.use(logger('dev'));
    // app.use(express.static(path.join(__dirname, '/frontend/build')))
    // app.get('*', (req, res) =>
    // res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    // )
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please Set To PRODUCTION'));
};

if (process.env.NODE_ENV === 'test') {
  app.use(morgan('dev'));
};


// CORS
// var corsOptions = {
//   // origin: "*",
//   origin: "http://localhost:8081",
//   // credentials: true
// };

// Cookie Session
app.use(
  cookieSession({
    name: process.env.SESSION_COOKIE_NAME,
    // keys: ['key420', 'key230'],
    secret: process.env.SESSION_COOKIE_SECRET, // should use as secret environment variable
    httpOnly: true,
    // resave: false,
    // saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

// Express Session
app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie:{maxAge: 180*60*1000}
}));

// Error Handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.disable('x-powered-by');
app.use(methodOverride());
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extend:true}))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// R O U T E S
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/patients.routes")(app);
require("./routes/booking.routes")(app);
require("./routes/blog.routes")(app);
// require("./routes/upload.routes")(app);
require("./routes/private.routes")(app);

// require("./routes/todo.routes")(app);

app.listen(process.env.PORT, () => {
    const PORT = process.env.PORT || 5555 || 5050
    const HOST = process.env.HOST;
    console.log(
        `Server Running @ ${HOST}:${PORT}`.yellow
      .red.bold
    );
    // console.log('hello'.green); // outputs green text
});
