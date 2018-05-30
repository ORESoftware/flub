import express = require("express");
import {middleware} from '../dist';
import cp = require("child_process");
import * as path from "path";
import {ErrorRequestHandler} from "express";
const childPath = path.resolve(__dirname + '/../dist/child.js');

const app = express();

app.use(middleware({
  cp: cp.fork(childPath)
}));

app.use(function (req, res, next) {
  next(new Error('404'));
});

app.use(<ErrorRequestHandler>function (err, req, res, next) {
  res.json({
    error: err && (err.stack || err.message || err) || null
  })
});

app.listen(3001, 'localhost', function() {
  console.log(" app is listening on port: ", this.address().port);
});
