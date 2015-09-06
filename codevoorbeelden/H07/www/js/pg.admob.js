// pg.admob.js - AdMob-advertentiebanner onder in de pagina. Zie hoofdstuk 7 voor meer informatie.

// 1. Event listener
document.addEventListener('deviceready', deviceReady);

// 2. Implementatie
function deviceReady() {
// select the right Ad Id according to platform
	var admobid = {};
	if (/(android)/i.test(navigator.userAgent)) { // for android
		admobid = {
			// vervang door uw eigen advertentieblok-ID!
			banner: 'ca-app-pub-1137064319170519/4401420110'
			//interstitial: 'ca-app-pub-xxx/yyy'
		};
	} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
		// Hier niet gebruikt.
		admobid = {
			//banner: 'ca-app-pub-xxx/zzz',
			//interstitial: 'ca-app-pub-xxx/kkk'
		};
	} else { // for windows phone
		// Hier niet gebruikt.
		admobid = {
			//banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad"
			//interstitial: 'ca-app-pub-xxx/kkk'
		};
	}
	// it will display smart banner at top center, using the default options
	if (AdMob) {
		AdMob.createBanner({
			adId: admobid.banner,
			position: AdMob.AD_POSITION.CENTER,
			autoShow: true
		});
	}
}