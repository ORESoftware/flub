"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dist_1 = require("../dist");
const cp = require("child_process");
const path = require("path");
const childPath = path.resolve(__dirname + '/../dist/child.js');
const app = express();
app.use(dist_1.middleware({
    cp: cp.fork(childPath)
}));
app.use(function (req, res, next) {
    next(new Error('404'));
});
app.use(function (err, req, res, next) {
    res.json({
        error: err && (err.stack || err.message || err) || null
    });
});
app.listen(3001, 'localhost', function () {
    console.log(" app is listening on port: ", this.address().port);
});
