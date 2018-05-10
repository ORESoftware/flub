'use strict';

import {ChildProcess} from "child_process";
import {RequestHandler} from "express";
import cp = require('child_process');


export interface FlubOpts {
  child?: ChildProcess,
  cp?: ChildProcess
}

export const middleware = function(opts: FlubOpts){
  
  const cp = opts && (opts.cp || opts.child);
  
  if(!cp){
    throw new Error('You must pass an options object to the flub maker, ' +
      'with a "cp" or "child" property representing a child process.');
  }
  
  
  return <RequestHandler>function(req,res,next){
    
    // cp.on('message', function(){
    //    res.json({received: true});
    // });
    
    if(req.socket !== res.socket){
       throw new Error('fooo');
    }
    
    req.socket.xxx = 'zzz';
    
    cp.send('handle', req.socket);
    
  
  };
  
  
  
};
