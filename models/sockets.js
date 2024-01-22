const Markers = require("./markers");


class Sockets {

  constructor( io ) {

    this.io = io;

    this.markers = new Markers()

    this.socketsEventes();
    
  }

  socketsEventes() {

    // On connection
    this.io.on('connection', ( socket ) => { 


      // Marcadores activos
      socket.emit('markers-actives', this.markers.actives);

      // Marcador nuevo
      socket.on('new-marker', ( marker ) => {
        console.log('New Marker');
        console.log(marker);
      })

      // Todo: Marcador actualizado
      
    }); 
  }

}


module.exports = Sockets;