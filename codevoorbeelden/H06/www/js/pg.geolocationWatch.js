// geolocationWatch.js - Toon je snelheid en locatie in de pagina. Zie hoofdstuk 6 voor meer informatie

// 1. Event listener toevoegen
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady() {
	// 1. Variabelen
	var watchId,
		watchOptions = {
			maximumAge: 3000, // maximaal 3s oud object accepteren.
			timeout: 2000,	// elke 2 seconden nieuwe positiebepaling
			enableHighAccuracy: true // zet accuratesse op hoog indien beschikbaar
		};

	function init() {
		watchId = navigator.geolocation.watchPosition(geoSuccess, geoError, watchOptions);
	}

	// 2. Watch opnieuw instellen
	$('#setWatch').on('click', function () {
		init();
	});

	// 3. Watch stoppen
	$('#clearWatch').on('click', function () {
		navigator.geolocation.clearWatch(watchId);
		$('#divPosition').html('');
	});

	init();
}// end deviceReady();


// 3. Success-callback
function geoSuccess(position) {
	var positionText = '<p>Latitude: ' + position.coords.latitude;
	positionText += ', Longitude: ' + position.coords.longitude;
	positionText += ', timestamp: ' + new Date(position.timestamp) + '</p>';

	$('#divPosition').prepend(positionText);
	$('#currentSpeed').html((position.coords.speed * 3.6) + ' km/h'); // * 3.6 voor omrekenenn naar km/uur
}
// 4. Error-callback
function geoError(error) {
	var msg = '';
	switch (error.code) {
		case error.TIMEOUT:
			msg = 'FOUT: Positie niet beschikbaar - er is een timeout opgetreden';
			break;
		case error.POSITION_UNAVAILABLE:
			msg = 'FOUT: Positie werd niet gevonden';
			break;
		case error.PERMISSION_DENIED:
			msg = 'FOUT: Geen toestemming locatie te gebruiken';
			break;
		default:
			msg = 'FOUT: Onbekende fout opgetreden, met foutcode: ' + errorCode.code;
	}
	$('#divPosition').append(msg);
}