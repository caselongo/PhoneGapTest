// pg.socialshare.js - Social Sharing. Zie hoofdstuk 7 voor meer informatie.

// 1. Event listener
document.addEventListener('deviceready', deviceReady);
function deviceReady() {
	// 1. algemene sharing via generieke platform-opties
	$('#btnShare').on('click', function () {
		window.plugins.socialsharing.share('Bekijk mijn Cordova-app op http://www.mijnserver.nl/mijnApp.html!');
		// verder uitbreiden met de shareVia-options. In ieder geval noemen, daarna naar oefening.
	});

	//2. Specifiek delen naar bepaald platform
	$('#list a').on('click', function (e) {
		e.preventDefault();
		var platform = $(this).data('platform');
		var msg = 'Bekijk mijn Cordova-app op http://www.mijnserver.nl/mijnApp.html!';
		if (platform ==='twitter'){
			window.plugins.socialsharing.shareViaTwitter(msg);
		}else if(platform === 'facebook'){
			window.plugins.socialsharing.shareViaFacebook(msg);
		}else if(platform === 'email'){
			window.plugins.socialsharing.shareViaEmail(msg);
		}
	})

}
