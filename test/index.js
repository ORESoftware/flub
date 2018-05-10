"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const path = require("path");
const cp = require("child_process");
const childPath = path.resolve(__dirname + '/../dist/child.js');
const k = cp.fork(childPath);
const server = net.createServer({ pauseOnConnect: false });
server.on('connection', (socket) => {
    k.send('handle', socket);
});
server.listen(3001);
