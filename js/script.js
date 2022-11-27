//mapa inicializado
var map = L.map('map').setView([-25.953724, 32.588711], 16);

//camada osm
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);

//icone para o marcador
var carIcon = L.icon({
    iconUrl:'../img/gps.png',
    iconSize: [70, 70]
})

//marcador no mapa
var marker = L.marker([-25.953724, 32.588711]).addTo(map)

//evento de click no mapa
map.on('click', function (e) {
    var segundoMarcador = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)

    L.Routing.control({
        waypoints: [
            L.latLng(-25.953724, 32.588711),
            L.latLng(e.latlng.lat, e.latlng.lng)
        ]
    }).on('routesfound', function (e) {
        console.log(e)
        e.routes[0].coordinates.forEach(function (coord, index) {
            setTimeout(() => {
                marker.setLatLng([coord.lat, coord.lng])
            }, 100 * index);
        })
    })
    
    .addTo(map);

})

