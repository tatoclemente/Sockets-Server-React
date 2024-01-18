

class Sockets {

  constructor( io ) {

    this.io = io;

    this.socketsEventes();
    
  }

  socketsEventes() {

    // On connection
    this.io.on('connection', ( socket ) => { 

      // Escuchar evento: mensaje-to-server
      socket.on('mensaje-to-server', (data) => {
        console.log(data);

        // Emitir evento: mensaje-from-server
        this.io.emit('mensaje-from-server', data)
      })
      
    }); 
  }

}


module.exports = Sockets;