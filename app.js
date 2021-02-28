var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
let expressValidator = require("express-validator");
var logger = require("morgan");
let mongoose = require("mongoose");

require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var entriesRouter = require("./routes/entries");


var app = express();

//connecting DB

let url = process.env.DB_URL;

mongoose.connect(url, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

let db = mongoose.connection;
db.on("error", () => {
  console.log("error in connection");
});
db.once("open", () => {
  console.log("db is connected");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static(path.join(__dirname, "uploads")));

app.use("/uploads", express.static("uploads"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/entries", entriesRouter);

module.exports = app;
