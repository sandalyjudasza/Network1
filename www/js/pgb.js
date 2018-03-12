function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'===========' + '\n' +
			'Name and surname : KAMIL SZMIT '    + 		'\n' + 
			'Email : 			kamil2000-12@o2.pl	'+	'\n' + 
			'Website  			NONE			 	'+ 	'\n' + 
			'DEANS GRUP NUMBER: 1011' + 				'\n' + 
			'FIELD  :     IT    '	+ 					'\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}