// geolocation.js - Toon je positie in Google Maps. Zie hoofdstuk 6 voor meer informatie

// 1. Event listener toevoegen
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady() {
	navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}// end deviceReady();


// 3. Success-callback
function geoSuccess(position) {
	console.log(position); // eenvoudige logging naar console.

	// 3a. Maak variabele met latitude en longitude
	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	// 3b. Opties voor de map
	var mapOptions = {
		center: latlng,
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// 3c. Map maken
	var mapElement = document.getElementById('mapCanvas'); // let op: NIET wrappen in jQuery object
	var map = new google.maps.Map(mapElement, mapOptions);

	// 3d. Marker toevoegen
	var markerOptions = {
		position: latlng,
		map: map,
		title: 'U bent hier'
	};
	var marker = new google.maps.Marker(markerOptions);
}
// 4. Error-callback
function geoError(error) {
	$('#mapCanvas').append('<h2>Geolocation Error:' + error.code + ', bericht: ' + error.message);
}