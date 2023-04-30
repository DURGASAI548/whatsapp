var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Durga = require("./bin/models");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:admin@cluster1.rxizxeg.mongodb.net/test",{
    useNewUrlParser: true,  
    useUnifiedTopology: true,  
})
const db = mongoose.connection;
db.once("open", function () {
    console.log("Connected successfully");
  });
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post("/message",function(req,res) 
{
    const MessageData = [
      {
        message : req.body.message
      }
    ]
    Durga.insertMany(MessageData)
    .then(value => {
        res.send("saved");
    })
    .catch(error => {
        res.send(error);
    })
//     res.send("updated successfully")
});
console.log("hello");
module.exports = app;
