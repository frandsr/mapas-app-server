const MarkerList = require("./MarkerList");

class Sockets {
  constructor(io) {
    this.io = io;
    this.markers = new MarkerList();
    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");
      //Emisión de marcadores activos al conectarse al socket
      socket.emit("active-makers", this.markers.activeMarkers);
      //Escucha de nuevo marcador creado por algún cliente y broadcast a los demás
      socket.on("new-marker", (newMarker) => {
        this.markers.addMarker(newMarker);
        socket.broadcast.emit("new-marker", newMarker);
      });
      socket.on("moved-marker", (movedMarker) => {
        this.markers.updateMarker(movedMarker);
        socket.broadcast.emit("moved-marker", movedMarker);
      });
    });
  }
}

module.exports = Sockets;
