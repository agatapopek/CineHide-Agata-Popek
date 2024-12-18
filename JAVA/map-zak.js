// Initialize the map
var map = L.map('map').setView([57.001830591026476, 10.100293585830373], 13);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
L.marker([54.387228974257035, 18.592466147053305]).addTo(map)
    .bindPopup('<a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x46fd74c326f8c097:0x733bc24682098a1?sa=X&ved=1t:8290&ictx=111" target="_blank">aleja Grunwaldzka 195/197, 80-266 Gdańsk, Polska</a>')
    .openPopup();

    document.querySelector('.last').addEventListener('click', function() {
        this.classList.toggle('open');
    });