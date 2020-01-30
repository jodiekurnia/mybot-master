<?php
/* Start Filtering IP */
require 'inc/class.IP2Proxy.php';
require_once 'inc/vendor/autoload.php';
use GeoIp2\Database\Reader;

$reader = new Reader('/var/www/html/inc/GeoLite2-City.mmdb');

if(!isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
	echo "<br />BAD IP! <br />
		<script>
		console.log('IP Jelek!');
		console.log('IP Header Gak di Set!!!!');
		</script>";
		exit;
}
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
$get = $reader->city($ip);
function getProxy($ip){
    $db = new \IP2Proxy\Database();
    $db->open('inc/IP2PROXY-LITE-PX8.BIN', \IP2Proxy\Database::FILE_IO);
    $records = $db->getAll($ip);
    return $records['isProxy'];
}
$proxy = getProxy($ip);
if($proxy != 0){
	echo "<br />BAD IP! <br />
	<script>
	console.log('IP Jelek!');
	console.log('Ini IP Proxy!');
	</script>";
	exit;
}
/*$country_data_json = file_get_contents('http://34.82.22.61/list.json');
$country_data = json_decode($country_data_json);
$country_data = array('RU','UA');
if(!in_array($get->country->isoCode, $country_data)){
	echo "<br />BAD IP! <br />
	<script>
	console.log('IP Jelek!');
	console.log('Ini IP Proxy!');
	</script>";
	exit;
}*/
$console = "IP ".$ip." Bagus dari: ".$get->country->isoCode;
/* End Filtering IP*/
/* Start Function Random Str */
function getRandAll($length) {
	$string = '';
	$characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for ($p = 0; $p < $length; $p++) {
		$string .= $characters[mt_rand(0, strlen($characters)-1)];
	}
	return $string;
}
function getRandNum($length){
	$string = '';
	$characters = "0123456789";
	for ($p = 0; $p < $length; $p++) {
		$string .= $characters[mt_rand(0, strlen($characters)-1)];
	}
	return $string;
}
/* End Function Random Str */
/** Start Randomizing Data JSON **/
function gender(){
	$gender = rand(0,1);
	if($gender == 0){
		$sex = "M";
	}else{
		$sex = "F";
	}
	return $sex;
}
$countryAl = array(
	"AF" => "AFG","AX" => "ALA","AL" => "ALB","DZ" => "DZA","AS" => "ASM","AD" => "AND","AO" => "AGO","AI" => "AIA","AQ" => "ATA","AG" => "ATG","AR" => "ARG","AM" => "ARM","AW" => "ABW","AU" => "AUS","AT" => "AUT","AZ" => "AZE","BS" => "BHS","BH" => "BHR","BD" => "BGD","BB" => "BRB","BY" => "BLR","BE" => "BEL","BZ" => "BLZ","BJ" => "BEN","BM" => "BMU","BT" => "BTN","BO" => "BOL","BQ" => "BES","BA" => "BIH","BW" => "BWA","BV" => "BVT","BR" => "BRA","IO" => "IOT","BN" => "BRN","BG" => "BGR","BF" => "BFA","BI" => "BDI","CV" => "CPV","KH" => "KHM","CM" => "CMR","CA" => "CAN","KY" => "CYM","CF" => "CAF","TD" => "TCD","CL" => "CHL","CN" => "CHN","CX" => "CXR","CC" => "CCK","CO" => "COL","KM" => "COM","CD" => "COD","CG" => "COG","CK" => "COK","CR" => "CRI","CI" => "CIV","HR" => "HRV","CU" => "CUB","CW" => "CUW","CY" => "CYP","CZ" => "CZE","DK" => "DNK","DJ" => "DJI","DM" => "DMA","DO" => "DOM","EC" => "ECU","EG" => "EGY","SV" => "SLV","GQ" => "GNQ","ER" => "ERI","EE" => "EST","SZ" => "SWZ","ET" => "ETH","FK" => "FLK","FO" => "FRO","FJ" => "FJI","FI" => "FIN","FR" => "FRA","GF" => "GUF","PF" => "PYF","TF" => "ATF","GA" => "GAB","GM" => "GMB","GE" => "GEO","DE" => "DEU","GH" => "GHA","GI" => "GIB","GR" => "GRC","GL" => "GRL","GD" => "GRD","GP" => "GLP","GU" => "GUM","GT" => "GTM","GG" => "GGY","GN" => "GIN","GW" => "GNB","GY" => "GUY","HT" => "HTI","HM" => "HMD","VA" => "VAT","HN" => "HND","HK" => "HKG","HU" => "HUN","IS" => "ISL","IN" => "IND","ID" => "IDN","IR" => "IRN","IQ" => "IRQ","IE" => "IRL","IM" => "IMN","IL" => "ISR","IT" => "ITA","JM" => "JAM","JP" => "JPN","JE" => "JEY","JO" => "JOR","KZ" => "KAZ","KE" => "KEN","KI" => "KIR","KP" => "PRK","KR" => "KOR","KW" => "KWT","KG" => "KGZ","LA" => "LAO","LV" => "LVA","LB" => "LBN","LS" => "LSO","LR" => "LBR","LY" => "LBY","LI" => "LIE","LT" => "LTU","LU" => "LUX","MO" => "MAC","MK" => "MKD","MG" => "MDG","MW" => "MWI","MY" => "MYS","MV" => "MDV","ML" => "MLI","MT" => "MLT","MH" => "MHL","MQ" => "MTQ","MR" => "MRT","MU" => "MUS","YT" => "MYT","MX" => "MEX","FM" => "FSM","MD" => "MDA","MC" => "MCO","MN" => "MNG","ME" => "MNE","MS" => "MSR","MA" => "MAR","MZ" => "MOZ","MM" => "MMR","NA" => "NAM","NR" => "NRU","NP" => "NPL","NL" => "NLD","NC" => "NCL","NZ" => "NZL","NI" => "NIC","NE" => "NER","NG" => "NGA","NU" => "NIU","NF" => "NFK","MP" => "MNP","NO" => "NOR","OM" => "OMN","PK" => "PAK","PW" => "PLW","PS" => "PSE","PA" => "PAN","PG" => "PNG","PY" => "PRY","PE" => "PER","PH" => "PHL","PN" => "PCN","PL" => "POL","PT" => "PRT","PR" => "PRI","QA" => "QAT","RE" => "REU","RO" => "ROU","RU" => "RUS","RW" => "RWA","BL" => "BLM","SH" => "SHN","KN" => "KNA","LC" => "LCA","MF" => "MAF","PM" => "SPM","VC" => "VCT","WS" => "WSM","SM" => "SMR","ST" => "STP","SA" => "SAU","SN" => "SEN","RS" => "SRB","SC" => "SYC","SL" => "SLE","SG" => "SGP","SX" => "SXM","SK" => "SVK","SI" => "SVN","SB" => "SLB","SO" => "SOM","ZA" => "ZAF","GS" => "SGS","SS" => "SSD","ES" => "ESP","LK" => "LKA","SD" => "SDN","SR" => "SUR","SJ" => "SJM","SE" => "SWE","CH" => "CHE","SY" => "SYR","TW" => "TWN","TJ" => "TJK","TZ" => "TZA","TH" => "THA","TL" => "TLS","TG" => "TGO","TK" => "TKL","TO" => "TON","TT" => "TTO","TN" => "TUN","TR" => "TUR","TM" => "TKM","TC" => "TCA","TV" => "TUV","UG" => "UGA","UA" => "UKR","AE" => "ARE","GB" => "GBR","UM" => "UMI","US" => "USA","UY" => "URY","UZ" => "UZB","VU" => "VUT","VE" => "VEN","VN" => "VNM","VG" => "VGB","VI" => "VIR","WF" => "WLF","EH" => "ESH","YE" => "YEM","ZM" => "ZMB","ZW" => "ZWE"
);
$arrSite = array(
	"newmobility.news" => "NewMobility",
	"www.hyundai.news" => "Newsroom Hyundai Media Newsroom",
	"metrology.news" => "Metrology and Quality News - Online Magazine Latest Dimensional Metrology, Inspection and Quality News",
	"www.sharedmobility.news" => "Shared Mobility",
	"aimotive.com" => "AImotive | Engineering scalable driving automation",
	"www.vigilantekorsou.news" => "Vigilante",
	"www.acea.be" => "ACEA - European Automobile Manufacturers' Association",
	"www.gm.com" => ">General Motors",
	"www.nissan-global.com" => "Nissan Motor Company Global Website",
	"www.fleetnews.co.uk" => "Fleet Management | Company Car Tax | Best Car Reviews | Fleet News | Fuel costs",
	"www.cardekho.com" => "CarDekho: New Cars, Car Prices, Buy & Sell Used Cars in India",
	"www.fia.com" => "Federation Internationale de l'Automobile",
	"www.dailysportscar.com" => "DailySportsCar Sportscar Racing's Internet Magazine",
	"automotivedigest.com" => "Automotive Digest — Smarter News for AutoDealers",
	"hondanews.com" => "Honda Newsroom",
);

$microtime = round(microtime(true)*1000);
$impid = $microtime.getRandNum(9);
$domain = $_SERVER['HTTP_HOST'];
$page = "https://".$domain.$_SERVER['REQUEST_URI'];
$country_json = $countryAl[$get->country->isoCode];
$sitename = $arrSite[$domain];
$query = $query = 'siteid='.md5($_SERVER['HTTP_HOST']).'&ip='.$ip.'&country='.$country_json.'&gender='.gender().'&sitename='.base64_encode($sitename).'&domain='.base64_encode($domain).'&page='.base64_encode($page);
if(isset($get->location->latitude)){
    $query .= '&lat='.$get->location->latitude;
}
if(isset($get->location->longitude)){
    $query .= '&lon='.$get->location->longitude;
}
if(isset($get->city->name)){
    $query .= '&city='.$get->city->name;
}
if(isset($get->mostSpecificSubdivision->isoCode)){
    $query .= '&region='.$get->mostSpecificSubdivision->isoCode;
}
if(isset($get->postal->code)){
	$query .= '&zip='.$get->postal->code;
}
/** End Randomizing Data JSON **/
$arrSrv = ['adsrv1','adsrv2'];
$dec_atas = 'http://'.$arrSrv[array_rand($arrSrv)].'.rootends.com/web/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=728x90';
$dec_tengah = 'http://'.$arrSrv[array_rand($arrSrv)].'.rootends.com/web/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=300x250';
$dec_bawah = 'http://'.$arrSrv[array_rand($arrSrv)].'.rootends.com/web/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=160x600';


$waardex_atas = 'http://'.$arrSrv[array_rand($arrSrv)].'.rootends.com/waardexweb/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=728x90';
$waardex_tengah = 'http://'.$arrSrv[array_rand($arrSrv)].'.rootends.com/waardexweb/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=300x250';
$waardex_bawah = 'http://'.$arrSrv[array_rand($arrSrv)].'.rootends.com/waardexweb/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=160x600';
?>
<!DOCTYPE html>
<html>
<head>
<title>Rootends Media Ad</title>
<style type="text/css">
body{
	display: flex;
	background-color: rgba(<?=mt_rand(0,255)?>, <?=mt_rand(0,255)?>, <?=mt_rand(0,255)?>, 0.2);
}
</style>
</head>
<body>
<script type="text/javascript" src="<?=$dec_atas?>"></script>
<script type="text/javascript" src="<?=$dec_tengah?>"></script>
<script type="text/javascript" src="<?=$dec_bawah?>"></script>

<script type="text/javascript" src="<?=$waardex_atas?>"></script>
<script type="text/javascript" src="<?=$waardex_tengah?>"></script>
<script type="text/javascript" src="<?=$waardex_bawah?>"></script>
</body>
</html>