// Initialize the map
var map = L.map('map').setView([57.001830591026476, 10.100293585830373], 13);

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map
L.marker([54.349318806433615, 18.651228215340698]).addTo(map)
    .bindPopup('<a href="https://www.google.com/maps/place/Kino+Kameralne+Cafe/@54.3493063,18.6511853,16z/data=!3m1!4b1!4m6!3m5!1s0x46fd733cfb0da1e3:0x193412478fcd01b5!8m2!3d54.3493063!4d18.6511853!16s%2Fg%2F11fhnk74p3?entry=ttu&g_ep=EgoyMDI0MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Lektykarska 4, 80-831 Gdańsk, Polska</a>')
    .openPopup();

    document.querySelector('.last').addEventListener('click', function() {
        this.classList.toggle('open');
    });