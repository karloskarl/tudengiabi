//Varastasin selle https://stackoverflow.com/questions/365826/calculate-distance-between-2-gps-coordinates ja abi tuli ka siit https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
  
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;
  
    var dLat = degreesToRadians(lat2-lat1);
    var dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c;
}

var kaugus = document.getElementById("kaugus");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    kaugus.innerHTML = "Asukohta ei saa vaadata."
}

caller = document.currentScript.getAttribute('caller');
var x;
var y;
if (caller === 'gen') {
    x = 58.38347955315079;
    y = 26.72194918252007;
} else if (caller === 'atso') {
    x = 58.381560425226624;
    y = 26.721583604332707;
} else if (caller === 'kivi') {
    x = 58.3820981344135;
    y = 26.72166975127602;
} else if (caller === 'trepp') {
    x = 58.38193110499378;
    y = 26.72132349989628;
} else if (caller === 'illegaard') {
    x = 58.37949435656203;
    y = 26.722395456307684;
}

function showPosition(position) {
    kaugus.innerHTML = "Kaugus - " + distanceInKmBetweenEarthCoordinates(x,y,position.coords.latitude, position.coords.longitude).toFixed(3) + " km";
}