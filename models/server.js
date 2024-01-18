const express = require('express');
const http = require('http');
const socketio = require('socket.io')
const path = require('path');
const Sockets = require('./sockets');


class Server {

  constructor() {

    this.app = express();
    this.port = process.env.PORT;

    // Http server
    this.server = http.createServer(this.app);

    // Configuracion de sockets 
    this.io = socketio( this.server, { /* configuraciones */  } );

  }

  middlewares() {

    this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
  
  }

  configSockets() {

    new Sockets( this.io )

  }

  execute() {

    this.middlewares();

    this.configSockets()

    // Inicializar el server
    this.server.listen( this.port, () => {
      console.log(`Server running on port: ${this.port}`);
    
    } )
  }


}

module.exports = Server;