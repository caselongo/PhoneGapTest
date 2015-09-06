// network.js - netwerkinformatie. Zie hoofdstuk 5 voor meer informatie

// 1. Event listener
document.addEventListener('deviceready', deviceReady);
function deviceReady(){
	// 1a. Huidige netwerkinformatie opvragen.
	checkConnection($('#networkInformation'));

	// 1b. Events online en offline afvangen en verwerken
	document.addEventListener('online', onOnline);
	document.addEventListener('offline', onOffline);
}
// 2. Implementatie
function checkConnection(el) {
	// lokale variabele met constante
	var netwerkStatus = {};
	netwerkStatus[Connection.UNKNOWN]  = 'Onbekende verbinding';
	netwerkStatus[Connection.ETHERNET] = 'Ethernet verbinding';
	netwerkStatus[Connection.WIFI]     = 'WiFi verbinding';
	netwerkStatus[Connection.CELL_2G]  = '2G verbinding';
	netwerkStatus[Connection.CELL_3G]  = '3G verbinding';
	netwerkStatus[Connection.CELL_4G]  = '4G verbinding';
	netwerkStatus[Connection.CELL]     = 'Algemene celluar verbinding';
	netwerkStatus[Connection.NONE]     = 'Geen netwerkverbinding';

	// Huidige status opvragen en in meegegeven element schrijven
	var currentState = navigator.connection.type;
	$(el).text(netwerkStatus[currentState]);
}

// 3. Events online en ofline verwerken
function onOnline() {
	$('#networkStatus').append('<br />We zijn weer online!: ' + new  Date());
}
function onOffline() {
	$('#networkStatus').append('<br />We zijn offline!: ' + new  Date());
}
