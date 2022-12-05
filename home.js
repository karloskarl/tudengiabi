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

var genx = 58.38347955315079
var geny = 26.72194918252007

var kaugus = document.getElementById("kaugus");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    kaugus.innerHTML = "Asukohta ei saa vaadata."
}

var x = genx
var y = geny
function showPosition(position) {
    kaugus.innerHTML = "Kaugus - " + distanceInKmBetweenEarthCoordinates(x,y,position.coords.latitude, position.coords.longitude).toFixed(3) + " km";
}