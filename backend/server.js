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
const logger = require("morgan");
// const morgan = require("morgan");
const path = require('path');
const multer = require("multer");

// const morgan = require('morgan');
// const { logger } = require('./middlewares/logEvents');

const connectDB = require("./config/db.config.js");
const { Session } = require('inspector');
dotenv.config({ path: './config/config.env'});
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
  // dotenv.config({ path:  '../.'})
  // app.use(logger('dev'));
};

if (process.env.NODE_ENV === 'production') {
    app.use(logger('dev'));
  // app.use(express.static(path.join(__dirname, '/frontend/build')))
  // app.get('*', (req, res) =>
  // res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  // )
};

if (process.env.NODE_ENV === 'test') {
  app.use(logger('dev'));
  // dotenv.config({ path:  '../.'})
  // app.use(logger('dev'));
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

app.disable('x-powered-by');
app.use(methodOverride());
// app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({extend:true}))
app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/images", express.static(path.join(__dirname, "/images")))

const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images")
  },
  filename: (req, file, callb) => {
    //callb(null, "file.png")
    callb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

// R O U T E S
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/patients.routes")(app);
require("./routes/booking.routes")(app);
require("./routes/blog.routes")(app);

require("./routes/private.routes")(app);
// require("./routes/upload.routes")(app);
// require("./routes/todo.routes")(app);

require("./routes/categories.routes")(app);
require("./routes/posts.routes")(app);


app.listen(process.env.PORT, () => {
    const PORT = process.env.PORT || 5555 || 5050
    const HOST = process.env.HOST;
    console.log(
        `Server Running @ ${HOST}:${PORT}`.red
      .red.bold
    );
    // console.log('hello'.green); // outputs green text
});
