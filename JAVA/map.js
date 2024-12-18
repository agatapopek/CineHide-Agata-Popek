// Initialize the map
var map = L.map('map').setView([57.001830591026476, 10.100293585830373], 13);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
L.marker([54.35237283308238, 18.652733226988946]).addTo(map)
    .bindPopup('<a href="PAGES/kadr.html" target="_blank">W starym kadrze</a>')
    .openPopup();

L.marker([54.34930455113885, 18.651186682669277]).addTo(map)
    .bindPopup('<a href="PAGES/kameralne.html" target="_blank">Kino Kameralne Cafe</a>')
    .openPopup();

 L.marker([54.387228974257035, 18.592466147053305]).addTo(map)
    .bindPopup('<a href="PAGES/zak.html" target="_blank">Kino Żak</a>')
    .openPopup();
