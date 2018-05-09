import {Socket} from "net";
import net = require('net')
import * as path from "path";
import cp = require("child_process");
const childPath = path.resolve(__dirname + '/../dist/child.js');
const k = cp.fork(childPath);

const server = net.createServer({pauseOnConnect: true});

server.on('connection', (socket: Socket) => {
  
  k.send('handle', socket);
  
});

server.listen(3001);
