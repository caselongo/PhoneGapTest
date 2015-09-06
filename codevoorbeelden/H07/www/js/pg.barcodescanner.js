// barcodescanner.js - scanbarcodes, QR-codes en meer. Zie hoofdstuk 7 voor meer informatie

// 1. Event listener toevoegen
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady() {
	// 2a. Scanknop aanhaken
	$('#btnScan').on('click', function () {
		// plugin aanroepen.
		cordova.plugins.barcodeScanner.scan(barcodeSuccess, barcodeError);
	})
}// end deviceReady();

// 3. Success handler
function barcodeSuccess(result) {
	//3a. Resultaat aan div toevoegen
	var msg = '<p>Scannen code geslaagd: ' + result.text;
	msg += '<br/>Formaat: ' + result.format;
	msg += '<br/>Cancelled : ' + result.cancelled + '</p><hr />';
	$('#divResult').append(msg);
	// 3b. Resultaat in InAppBrowser tonen
	var url = 'https://www.google.nl/?gws_rd=ssl#safe=off&q=';
	if (result.format === 'EAN_13') {
		url += result.text;
		window.open(url, '_blank', 'location=yes');
	} else if (result.format === 'QR_CODE') {
		if ((result.text.indexOf('http://') > -1) ||
			(result.text.indexOf('https://') > -1)) {
			window.open(result.text, '_blank', 'location=yes');
		}
	}
}

// 4. Error handler
function barcodeError(error) {
	$('#divResult').append('<p>Scannen barcode mislukt: ' + error + '</p>');
}