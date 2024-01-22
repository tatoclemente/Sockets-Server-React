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

      console.log('Cliente conectado');
      // Todo: Marcadores activos
      

      // Todo: Marcador nuevo


      // Todo: Marcador actualizado
      
    }); 
  }

}


module.exports = Sockets;