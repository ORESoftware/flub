#!/usr/bin/env node
'use strict';

process.on('message', function (m, socket) {
  
  console.log('here is the zoom...');
  
  if (m === 'handle' && socket) {
    console.log('got the socket with handle...');
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
