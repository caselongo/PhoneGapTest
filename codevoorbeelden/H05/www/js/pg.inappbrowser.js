// inappbrowser.js - Open webpagina's binnen de app. Zie hoofdstuk 5 voor meer informatie

// 1. Event listener toevoegen
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady(){
	// 2a. Klik op de menu-items aanhaken
	$('#list a').on('click', function(e){
		e.preventDefault();
		var page = $(this).data('id');
		var url = 'http://www.phonegap.com'; // standaardinstelling
		if (page ==='android'){
			url='http://developer.android.com';
		}else if (page ==='apple'){
			url='http://developer.apple.com';
		}else if (page ==='winphone'){
			url='http://developer.windowsphone.com';
		}

		// open nieuwe browser-instantie via plug-in InAppBrowser
		window.open(url, '_blank', 'location=yes');
	});
}