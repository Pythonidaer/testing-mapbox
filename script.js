mapboxgl.accessToken =
  "pk.eyJ1IjoicHl0aG9uaWRhZXIyMDI0IiwiYSI6ImNsdGx3bDY1eTFmY3MyanJyNmZyZDdrOWMifQ.32hJgDe5oSspXy2JyCyhPg";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  
  map.addControl(directions, 'top-left');
}
