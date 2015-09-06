// device.js - apparaatinformatie. Zie hoofdstuk 5 voor meer informatie

// 1. Event listener toevoegen
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady(){
	$('#deviceCordova').text(device.cordova);
	$('#deviceModel').text(device.model);
	$('#devicePlatform').text(device.platform);
	$('#deviceUuid').text(device.uuid);
	$('#deviceVersion').text(device.version);
}