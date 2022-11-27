//mapa inicializado
var map = L.map('map').setView([-25.953724, 32.588711], 16);

//camada osm
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);

//icone para o marcador
var carIcon = L.icon({
    iconUrl: '../img/gps.png',
    iconSize: [70, 70]
})

//marcador no mapa
//var marker = L.marker([-25.953724, 32.588711]).addTo(map)

L.Routing.control({
    waypoints: [
        L.latLng([-25.953724, 32.588711]),
        L.latLng(-25.923909, 32.465802)
    ],
    routeWhileDragging: true,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);

