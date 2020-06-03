function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getTimestamp(){
	return new Date().getTime();
}
function getRandStr(length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < length; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
    return text;
  }
function getRandNum(length) {
	var text = "";
	var possible = "0123456789";
	for (var i = 0; i < length; i++){
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
//IP Header
var val_ip = require("ipaddr.js");
//
var list_ip = [
	'0.0.0.0-255.255.255.255',
];
function random_ip(){	
	var get_ip = [0,0,0,0];
	var index = getRandInt(0,(list_ip.length-1));
	var my_ip = list_ip[index].split('-');
	var awal = my_ip[0].split('.');
	var akhir = my_ip[1].split('.');
	for(i=0;i<4;i++){
		if(awal[i] == akhir[i]){
			get_ip[i] = parseInt(awal[i]);
		}else{
			get_ip[i] = getRandInt(parseInt(awal[i]), parseInt(akhir[i]));
		}
	}
	return get_ip[0] +"."+ get_ip[1] +"."+ get_ip[2] +"."+ get_ip[3] ;
}
function goodip(){
	var ip = random_ip();
	var validation = val_ip.parse(ip).range();
	if(validation == "unicast"){
		return ip;
	}else{
		return goodip();
	}
}
/** URL **/
function random_url() {
	return "https://www.nimo.tv/live/45140705";
}
//UserAgent
phantom.injectJs("randexp.min.js");
phantom.injectJs("UAGenerator.js");
var gen = new UAGenerator();
function random_ua(){
	return gen.generate(["chrome_win", "chrome_mac", "firefox_win", "firefox_mac", "safari_mac", "safari_ipad", "safari_iphone","firefox_android"]);
}
//Required Setting
var wp = require("webpage").create();
var head, lastTime, startTime;
//onLoad Setting
wp.onLoadStarted = function(url, isFrame) {
	lastTime = getTimestamp();
	wp.viewportSize = { width:1920, height:1080 };
	wp.zoomFactor = 1;
	wp.settings.allowMedia = true;
	wp.settings.loadImages = true;
	wp.settings.diskCache = true;
	wp.settings.resourceTimeout = 30000;	
	phantom.cookiesEnabled = true;
	wp.settings.userAgent = head["User-Agent"];
	wp.customHeaders = head;
	if(!isFrame){
		startTime = getTimestamp();
		cursorMove();
	}
};
//onInitialized
wp.onInitialized = function(){
	lastTime = getTimestamp();
};
//onConsole
wp.onConsoleMessage = function(msg) {
	console.log(msg);
};
//onErrorJS
wp.onError = function() {
	//console.log(message);
};
//onFinished Setting
wp.onLoadFinished = function(isFrame){
	lastTime = getTimestamp();
	if(!isFrame){
		startTime = getTimestamp();
	}
	//console.log("Loading of "+url+" is a "+ status);
};
//onResourceRequested
wp.onResourceRequested = function(requestData, networkRequest) {
	lastTime = getTimestamp();
	//console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};
//onResourceReceived
wp.onResourceReceived = function() {
	lastTime = getTimestamp();
	//console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));

};
//onPageCreated
wp.onPageCreated = function(childPage) {
		childPage.onLoadStarted = function() {
		childPage.viewportSize = { width:1920, height:1080 };
		childPage.zoomFactor = 1;
		childPage.settings.allowMedia = true;
		childPage.settings.loadImages = true;
		childPage.settings.diskCache = true;	
		childPage.settings.resourceTimeout = 30000;
		phantom.cookiesEnabled = true;
		childPage.settings.userAgent = head["User-Agent"];
		childPage.customHeaders = head;
	};
	childPage.onLoadFinished = function(status) {
		if(status == "success"){
				childPage.close();
		}else{
			childPage.close();
		}
	};
};
//Behaviour Setting
function cursorMove(){
	setTimeout(function () {
		wp.sendEvent('mousemove', getRandInt(0,1920), getRandInt(0,1080), null, null);
		cursorMove();
	}, 100);
}
wp.open(random_url(),{headers:head = {"X-Forwarded-For": goodip(), "User-Agent": random_ua()}});