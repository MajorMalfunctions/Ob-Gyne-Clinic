require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require ('morgan');
const methodOverride = require('method-override');
const cookieSession = require("cookie-session");

const colors = require('colors');
const cors =  ('cors');
const dotenv = ('dotenv');

const router = require ('./routes/index.js');
const connectDB =  $require('./config/db.config.js');
const errorHandler =  ('./utils/errorHandler.js');

const app = express();
const PORT = process.env.PORT || 5050;

// Load Environment Variables
dotenv.config({ path: './config/config.env'});

// Load Database
connectDB();

const db = require("./models");
const Role = db.role;

const corsOptions = {
    origin: "http://localhost:8080",
    useCredentials: true
};

app.use(
    cookieSession({
      name: process.env.SESSION_COOKIE_NAME,
      secret: process.env.SESSION_COOKIE_SECRET, // should use as secret environment variable
      httpOnly: true
   })
);

app.use(methodOverride());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extend:false}))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));            // parse application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.json({ message: "Sound Check Mic" });
    res.send(' Mic Test');
});


// R O U T E S
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/patients.routes")(app);

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.listen(
    PORT,
    console.log(`Server Running In ${[process.env.NODE_ENV]} mode with port ${PORT}`.magenta.bold));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
});

