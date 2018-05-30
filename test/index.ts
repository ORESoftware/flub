import {Socket} from "net";
import net = require('net');
import http = require('http')
import * as path from "path";
import cp = require("child_process");
const childPath = path.resolve(__dirname + '/../dist/child.js');
const k = cp.fork(childPath);

// const server = net.createServer({pauseOnConnect: true});

const server = http.createServer(function(req,res){
  
  const msg = JSON.stringify({some: 'jimmy'});
  k.send('foo:' + msg, req.socket);
  
});

// server.on('connection', (socket: Socket) => {
//
//
//
// });

server.listen(3001);
