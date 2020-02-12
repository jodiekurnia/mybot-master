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
//Domain
var brand_arr = ['alfa-romeo','aston-martin','audi','bentley','bmw','bugatti','cadillac','chevrolet','chrysler','citroen','corvette','daf','dacia','daewoo','daihatsu','datsun','de-lorean','dino','dodge','farboud','ferrari','fiat','ford','honda','hummer','hyundai','jaguar','jeep','kia','koenigsegg','lada','lamborghini','lancia','land-rover','lexus','ligier','lincoln','lotus','martini','maserati','maybach','mazda','mclaren','mercedes','mercedes-benz','mini','mitsubishi','nissan','noble','opel','peugeot','pontiac','porsche','renault','rolls-royce','rover','saab','seat','skoda','smart','spyker','subaru','suzuki','toyota','vauxhall','volkswagen','volvo'];

var arrDomain = ['newmobility.news','www.hyundai.news','metrology.news','www.sharedmobility.news','aimotive.com','www.vigilantekorsou.news','www.acea.be','www.fleetnews.co.uk','www.cardekho.com','www.fia.com','www.dailysportscar.com','automotivedigest.com','hondanews.com','carcar.news','www.time24.news','www.autotorque.news','www.montclairlocal.news','www.thecarconnection.com','mettisglobal.news','obor.news','www.motor1.com','www.thedrive.com','www.motortrend.com','www.autoblog.com','www.caranddriver.com','www.topgear.com','www.automobilemag.com','www.motorauthority.com','carbuzz.com','www.thetruthaboutcars.com','www.autoweek.com','www.roadandtrack.com','www.just-auto.com','www.rushlane.com','driving.ca','www.topspeed.com','www.nextgreencar.com','www.automotiveworld.com','www.autospies.com','practicalmotoring.com.au','www.drive.com.au','www.whichcar.com.au'];

var arrKw = ['7-doubts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-you-should-clarify','15-secrets-that-experts-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-don\'t-want-you-to-know','you-should-experience-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-at-least-once-in-your-lifetime-and-here\'s-why','why-you-must-experience-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-at-least-once-in-your-lifetime','why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-had-been-so-popular-till-now?','7-secrets-you-will-not-want-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'10-hidden-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-features-that-will-make-your-life-easier','15-quick-tips-regarding-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'this-is-how-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-will-look-like-in-10-years-time','all-you-need-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'never-underestimate-the-influence-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'you-will-never-believe-these-bizarre-truth-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-latest-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-has-finally-been-revealed!','seven-things-you-need-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-today','ten-advices-that-you-must-listen-before-studying-'+brand_arr[getRandInt(0,(brand_arr.length-1))],''+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-so-famous,-but-why?','5-reasons-owning-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-will-change-your-life','7-top-risks-of-owning-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'15-secrets-you-will-not-want-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-15-reasons-tourists-love-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'what-will-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-be-like-in-the-next-50-years?','7-explanation-on-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-important','ten-unbelievable-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-top-5-pros-and-cons-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'how-do-you-choose-the-best-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'?','seven-quick-tips-for-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-important-life-lessons-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-taught-us','five-shocking-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-ultimate-revelation-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-conventional-advertising-methods-that-will-jeopardize-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'﻿10-reasons-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-common-in-usa','5-things-you-should-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-features-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-make-everyone-love-it','ten-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-will-make-you-think-twice','five-secrets-that-experts-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-don\'t-want-you-to-know','most-effective-ways-to-overcome-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'\'s-problem','how-to-have-a-fantastic-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-with-minimal-spending','10-secrets-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-has-never-been-revealed-for-the-past-50-years','10-easy-ways-to-facilitate-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-things-you-didn\'t-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-trending-stuff-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'ten-lessons-that-will-teach-you-all-you-need-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-awesome-things-you-can-learn-from-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'how-will-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-be-in-the-future','you-will-never-thought-that-owning-a-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-could-be-so-beneficial!','five-things-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-taboos-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-you-should-never-share-on-twitter','5-factors-that-affect-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'\'s-longevity','you-will-never-believe-these-bizarre-truth-behind-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-things-you-should-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-7-secrets-that-you-shouldn\'t-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'how-you-can-own-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-with-lower-cost','this-year-will-be-the-year-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-quick-tips-regarding-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-things-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-you-have-to-experience-it-yourself','10-secrets-that-experts-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-don\'t-want-you-to-know','how-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-going-to-change-your-business-strategies','7-reliable-sources-to-learn-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-secrets-you-will-not-want-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'10-explanation-on-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-important','why-is-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-considered-underrated?','understand-the-background-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-now','quiz:-how-much-do-you-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'?','here\'s-what-people-are-saying-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-latest-developments-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'things-that-make-you-love-and-hate-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-reasons-why-people-love-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-clarifications-on-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-advantages-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-and-how-you-can-make-full-use-of-it','7-latest-developments-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'10-shitty-things-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-have-done-in-2015','5-things-you-most-likely-didn\'t-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-10-secrets-that-you-shouldn\'t-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'how-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-can-help-you-improve-your-health','this-is-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-so-famous!','what-you-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-and-what-you-don\'t-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-innovative-approaches-to-improve-your-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'10-new-thoughts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-will-turn-your-world-upside-down','the-billionaire-guide-on-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-helps-you-get-rich','5-useful-tips-from-experts-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-ingenious-ways-you-can-do-with-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-disadvantages-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-and-how-you-can-workaround-it','the-history-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'i-will-tell-you-the-truth-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-in-the-next-60-seconds','5-common-misconceptions-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-explanation-on-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-important','the-biggest-contribution-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-to-humanity','the-seven-common-stereotypes-when-it-comes-to-'+brand_arr[getRandInt(0,(brand_arr.length-1))],''+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-has-the-answer-to-everything','5-top-reasons-why-you-face-obstacles-in-learning-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-shocking-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'15-features-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-make-everyone-love-it','skills-that-you-can-learn-from-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-things-your-competitors-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-doubts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-you-should-clarify','learn-how-to-make-more-money-with-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'15-advantages-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-and-how-you-can-make-full-use-of-it','understanding-the-background-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-things-nobody-told-you-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-clarifications-on-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-tips-to-avoid-failure-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'20-wonderful-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'.-number-16-is-absolutely-stunning','5-mind-blowing-reasons-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-using-this-technique-for-exposure','the-hidden-agenda-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'ten-facts-you-never-knew-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-solid-evidences-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-bad-for-your-career-development','how-to-get-people-to-like-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'how-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-can-ease-your-pain','how-to-own-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-for-free','the-story-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-has-just-gone-viral!','five-doubts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-you-should-clarify','this-is-why-this-year-will-be-the-year-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-reasons-why-people-love-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-preparations-you-should-make-before-using-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'ten-shitty-things-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-have-done-in-2015','5-reasons-why-you-should-invest-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-unconventional-knowledge-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-you-can\'t-learn-from-books','the-death-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'what\'s-so-trendy-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-everyone-went-crazy-over-it?','learn-all-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-from-this-politician','simple-guidance-for-you-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'why-are-children-so-obsessed-with-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'10-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-will-blow-your-mind','seven-ways-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-can-improve-your-business','ten-common-misconceptions-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'i-finally-tried-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-for-a-week-and-this-is-what-happened','10-unconventional-knowledge-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-you-can\'t-learn-from-books','seven-factors-that-affect-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'\'s-longevity','now-is-the-time-for-you-to-know-the-truth-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-gigantic-influences-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-5-secrets-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-only-a-handful-of-people-know','seven-secrets-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-has-never-been-revealed-for-the-past-50-years','seven-useful-tips-from-experts-in-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-top-risks-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'here\'s-what-no-one-tells-you-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-mind-blowing-reasons-why-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-using-this-technique-for-exposure','5-features-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-make-everyone-love-it','10-shocking-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-secrets-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-has-never-been-revealed-for-the-past-50-years','here\'s-what-industry-insiders-say-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-quick-tips-for-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'10-gigantic-influences-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-things-you-didn\'t-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'ten-ways-to-introduce-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-preparations-you-should-make-before-using-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'5-common-myths-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'15-secrets-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-has-never-been-revealed-for-the-past-50-years','five-stereotypes-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-aren\'t-always-true','10-ingenious-ways-you-can-do-with-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-great-lessons-you-can-learn-from-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'the-15-common-stereotypes-when-it-comes-to-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-common-misconceptions-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'ten-reasons-why-people-love-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'7-reasons-owning-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-will-change-your-life','five-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-will-actually-make-your-life-better','master-the-skills-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-and-be-successful','why-are-children-getting-addicted-to-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-nowadays?','seven-facts-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-that-will-blow-your-mind','is-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-still-relevant?','what-it\'s-like-dating-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-innovative-approaches-to-improve-your-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'five-things-your-boss-needs-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'seven-reasons-the-quality-of-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-is-so-much-more-important-than-quantity','the-millionaire-guide-on-'+brand_arr[getRandInt(0,(brand_arr.length-1))]+'-to-help-you-get-rich','everything-you-need-to-know-about-'+brand_arr[getRandInt(0,(brand_arr.length-1))],'auto-insurance','auto-insurance-california','auto-insurance-com','auto-insurance-comparison','auto-insurance-cost','auto-insurance-coverage','auto-insurance-farm','auto-insurance-for','auto-insurance-greenville','auto-insurance-houston','auto-insurance-mutual','auto-insurance-ontario','auto-insurance-quotes-toronto','auto-insurance-rates','auto-insurance-safe','auto-insurance-toronto','automated-advertising-services','automotive','automotive-accessories','automotive-car-accessories','automotive-cars','automotive-components','automotive-electronics','automotive-industry','automotive-jobs','automotive-kits','automotive-navigation','automotive-parts','automotive-parts-accessories','automotive-repair','automotive-repair-tools','automotive-sales-lead','automotive-services','automotive-shop-management-software','automotive-software-shop','automotive-truck-accessories','automotive-trucks','automotive-vehicles','automotive-wheels','bmw-automotive','body-automotive','body-parts-automotive','car-auto-insurance','car-automotive-parts','care-automotive','cheap-auto-insurance','chevrolet-automotive','chevy-automotive','chevy-automotive-parts','company-auto-insurance','compare-auto-insurance','compare-automotive','direct-auto-insurance','discount-auto-insurance','engine-automotive','exhaust-automotive','new-auto-insurance','new-automotive','performance-automotive','performance-parts-automotive'];
//URL
function random_url() {
	return "http://"+arrDomain[getRandInt(0,(arrDomain.length-1))]+"/"+getRandNum(5)+"-"+arrKw[getRandInt(0,(arrKw.length-1))];
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
		checkFinished();
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
function click(){
	return wp.sendEvent('click', getRandInt(0,1920), getRandInt(0,1080), 'left', 0);
}
function nonclick(){
	return slimer.wait(100);
}
var arrClick = [click,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick,nonclick];
function RandClick(){
	return arrClick[getRandInt(0, (arrClick.length-1))]();
}
function cursorMove(){
	wp.sendEvent('mousemove', getRandInt(0,1920), getRandInt(0,1080), null, null);
	checkClickReload();
}
function clickNreload(){
	console.log('Click and Reload START!');
	RandClick();
	slimer.wait(3000);
	wp.clearCookies();
	delete head["X-Forwarded-For"];
	delete head["User-Agent"];
	console.log("RELOAD!!!");
	wp.open(random_url(),{headers:head = {"X-Forwarded-For": goodip(), "User-Agent": random_ua()}});
}
//checkFinished
function checkFinished() {
	setTimeout(function () {
	var currentTime = getTimestamp();
		if(currentTime-lastTime>1500){
			console.log('checkFinished START!');
			cursorMove();
		}else{
			checkFinished();
		}
	}, 100);
}
function checkClickReload() {
	    setTimeout(function () {
			var currentTime = getTimestamp();
		if((currentTime-lastTime>1500) || (currentTime-startTime>30000)){
			clickNreload();
		}else{
			console.log("NOT FINISH!");
			checkFinished();
        }
    }, 100);
}
wp.open(random_url(),{headers:head = {"X-Forwarded-For": goodip(), "User-Agent": random_ua()}});