"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const path = require("path");
const cp = require("child_process");
const childPath = path.resolve(__dirname + '/../dist/child.js');
const k = cp.fork(childPath);
const server = http.createServer(function (req, res) {
    const msg = JSON.stringify({ some: 'jimmy' });
    k.send('foo:' + msg, req.socket);
});
server.listen(3001);
