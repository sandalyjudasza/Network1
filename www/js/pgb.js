function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	console.log(navigator.accelerometer);
	navigator.notification.beep(1);
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
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

function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
}

function onError() {
    alert('onError!');
}
