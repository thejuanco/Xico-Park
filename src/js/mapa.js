//Este archivo es donde se almacenan los parametros del mapa :) 

(function() {

    const lat = 20.277124;
    const lng = -97.958133;
    const mapa = L.map('mapa').setView([lat, lng ], 19);
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);


})()