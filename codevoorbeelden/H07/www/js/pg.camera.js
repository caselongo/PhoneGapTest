// camera.js - foto's maken via native Camera plugin. Zie hoofdstuk 6 voor meer informatie

// 1. Event listener toevoegen
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady(){
	// 2a. Logging
	$('#divResult').append('Camera gereed');

	// 2b. Opties voor de camera
	var cameraOptions ={
		quality : 50,
		destinationType: Camera.DestinationType.DATA_URL
	};

	var libraryOptions ={
		destinationType: Camera.DestinationType.DATA_URL,
		sourceType : Camera.PictureSourceType.PHOTOLIBRARY
	};

	// 2c. Event handlers
	$('#btnCamera').on('click', function(){
		navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
	});

	$('#btnPhotoLibrary').on('click', function(){
		navigator.camera.getPicture(cameraSuccess, cameraError, libraryOptions);
	});
}// end deviceReady();


// 3. Success-callback
function cameraSuccess(imageData){
	// met jQuery leeg image-element in de pagina ophalen
	// en de geretourneerde imageData als base64-string er aan toekennen.
	$('#imgPhoto').attr('src', 'data:image/jpeg;base64,' +  imageData);
	$('#divResult').append('<p>Foto geplaatst!</p>');
}

/// 4. Error-callback
function cameraError(message){
	$('#divResult').append('<h2>Error: ' + message + '</h2');
}