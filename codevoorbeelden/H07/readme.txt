/* Dit is de voorbeeldcode behorend bij Hoofdstuk 7 van Web Development Library - PhoneGap,
 ISBN 9789059407862, (C) Van Duuren Media BV, Peter Kassenaar, 2015.

 Kopieer de inhoud van de map \www naar uw eigen projectmap en draai de app. De app-structuur
 (de mappen \hooks, \platforms, enzovoort) zijn NIET meegeleverd. Maak eerst zelf een Cordva-
 app via de CLI of een PhoneGap Build-project.

 De volgende plug-ins worden gebruikt in dit hoofdstuk. Installeer deze met de opdracht

  cordova plugins add <plug-innaam>

 [hoofdstuk 5]
 * org.apache.cordova.device
 * org.apache.cordova.network-information
 * org.apache.cordova.inappbrowser

 [hoofdstuk 6]
 * org.apache.cordova.camera
 * org.apache.cordova.geolocation

 [hoofstuk 7]
 * com.phonegap.plugins.barcodescanner
 * nl.x-services.plugins.socialsharing
 * com.google.cordova.admob

**************************************************************
 Bij gebruik van PhoneGap Build moeten de volgende plug-ins worden toegevoegd aan config.xml

 [hoofdstuk 5]
 * <gap:plugin name="org.apache.cordova.device" version="0.2.12" />
 * <gap:plugin name="org.apache.cordova.network-information" version="0.2.12" />
 * <gap:plugin name="org.apache.cordova.inappbrowser" version="0.5.2" />

 [hoofdstuk 6]
 * <gap:plugin name="org.apache.cordova.camera" version="0.3.2" />
 * <gap:plugin name="org.apache.cordova.geolocation" version="0.3.10" />

 [hoofstuk 7]
 * <gap:plugin name="com.phonegap.plugins.barcodescanner" version="2.0.0" />
 * <gap:plugin name="nl.x-services.plugins.socialsharing" version="4.3.8" />
 * <gap:plugin name="com.google.cordova.admob" source="plugins.cordova.io"/>


 Zie verder de tekst van het boek voor nadere uitleg.

*/