class MarkerList {
  constructor() {
    this.activeMarkers = {};
  }

  addMarker(marker) {
    this.activeMarkers[marker.id] = marker;
    return marker;
  }

  removeMarker(marker) {
    delete this.activeMarkers[marker.id];
  }

  updateMarker(marker) {
    this.activeMarkers[marker.id] = marker;
  }
}

module.exports = MarkerList;
