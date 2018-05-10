#!/usr/bin/env node
'use strict';

process.on('message', function (m, v) {
  
  console.log('here is the zoom...', v.m);
  
  const socket = v && v.socket;
  
  if (m === 'handle' && socket) {
    
    console.log('got the socket with handle...');
    console.log('socket.xxx',socket.xxx);
    
    socket.write([
      'HTTP/1.1 200 OK',
      'Content-Type: text/html; charset=UTF-8',
      'Content-Encoding: UTF-8',
      'Accept-Ranges: bytes',
      'Connection: keep-alive',
    ].join('\n') + '\n\n');
  
    socket.write(`
    <h1> Example </h1>
  `);
    
    socket.end('foobar!!!');
  }
  else if(socket){
    // socket.end('wtf! lol\n');
    console.log('got the socket withOUT handle...');
  }
  else{
    console.log('no idea what is going on now...');
  }
  
});
