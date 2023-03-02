const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require("morgan");
const methodOverride = require('method-override');
const cookieSession = require("cookie-session");
const cookieParser = require('cookie-parser')
const colors = require('colors');
const cors = require ("cors");

const router = require ('./routes/index.js');
const errorHandler =  ('./utils/errorHandler.js');

const app = express();
const PORT = process.env.PORT || 5050;

const connectDB = require("./config/db.config.js");
const { Session } = require('inspector');
dotenv.config({ path: './config/config.env'});
connectDB();

// mongoose.connect("mongodb+srv://jep420:jep230@cluster0.m0odcpy.mongodb.net/obgyne-clinic", {
//   useNewUrlParser: "true",
//   useUnifiedTopology: "true"
// })
// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })
// mongoose.connection.on("connected", (err, res) => {
//     console.log(
//     `MongoDB connected: ${mongoose.connection.host}`.cyan.underline.bold
//     );
// })

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

if (process.env.NODE_TEST === 'test') {
    app.use(logger('dev'));
}



const db = require("./models");
const Role = db.role;

// CORS
app.use(
    cors({
      origin: '*',
      // origin: "http://localhost:3000",
      credentials:  true
    })
);

app.use(
    cookieSession({
      name: process.env.SESSION_COOKIE_NAME,
      keys: ["key1", "key2"],
      secret: process.env.SESSION_COOKIE_SECRET, // should use as secret environment variable
      httpOnly: true
   })
);

app.use(methodOverride());
// app.use((corsOptions));
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
// require("./routes/patients.routes")(app);

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


app.listen(process.env.PORT, () => {
    const PORT = process.env.PORT || 5555 || 5050
    const HOST = process.env.HOST;
    console.log(
        `Server Running @ ${HOST}:${PORT}`
      .red.bold
    );
    // console.log('hello'.green); // outputs green text
});





function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
        new Role({
            name: "user"
        }).save(err => {
            if (err) {
            console.log("error", err);
            }

            console.log("added 'user' to roles collection");
        });

        new Role({
            name: "moderator"
        }).save(err => {
            if (err) {
            console.log("error", err);
            }

            console.log("added 'moderator' to roles collection");
        });

        new Role({
            name: "admin"
        }).save(err => {
            if (err) {
            console.log("error", err);
            }

            console.log("added 'admin' to roles collection");
        });
        }
    });
}