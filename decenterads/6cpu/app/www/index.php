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
/** Start Filtering X-Requested-With **/
if(!isset($_SERVER['HTTP_X_REQUESTED_WITH'])){
    echo "<br />BAD APP! <br />
	<script>
	console.log('APP Gak Di Set!');
	</script>";
	exit;
}
/** End Filtering X-Requested-With **/
/* Start Function Random Str */
function getRandAll($length) {
	$string = '';
	$characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for ($p = 0; $p < $length; $p++) {
		$string .= $characters[mt_rand(0, strlen($characters)-1)];
	}
	return $string;
}
function getRandDeviceID($length) {
	$string = '';
	$characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
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
$bundle = $_SERVER['HTTP_X_REQUESTED_WITH'];
function nameAPP($id){
	$nameApp = array('virus.cleaner.antivirus.phone.security.boost' => 'Super Antivirus - Cleaner & Booster & Clean Virus','phone.cleaner.antivirus.speed.booster' => 'Super Cleaner - Antivirus & Junk Cleaner & Booster','com.art.color.number.coloring.book' => 'Color Fun - Color by Number & Coloring Books','com.magic.puzzle.word.connect.travel' => 'Word Connect Puzzle - Word Travel','com.bongolight.pixelcoloring' => 'Pixel Color - Color by Number, Pixel Art','com.pixel.art.coloring.color.by.number' => 'Daily Pixel - Color by Number, Happy Pixel Art','com.fingerstudios.solitaire.classic' => 'Solitaire Card Games: Classic Solitaire Klondike','com.myapp.sweethouse' => 'Sweet House','com.myapp.sugarStore' => 'Sugar Store','com.castle.play' => 'Manor Diary','real.robot.car.tranforming.battle.city.formula.dragon' => 'Real Robot Car Transforming Battle City LD Police','car.stunt.racing.crazy.ramp.driving.impossiable.tracks' => 'Extreme Car Stunts - Crazy Car Driving Simulator','com.fsjj.cerescleaner' => 'Ceres Cleaner - Booster, CPU Cooler & Apps Manager','com.archery.go.bow.arrow.king.sports.game' => 'Archery Go- Archery games, Archery','bumperbattle.io.game' => 'Beetles.io - Popular io game','pool.master.billiards.ball.games' => 'Pool Master','boat.rider.game.race.row.kayak.adventure' => 'Boat Rider - 3D Row Adventure','io.games.poolio.ballpool.game' => 'Pool.io-amaze io games','com.buzzfeed.tasty' => 'Tasty','com.buzzfeed.android' => 'BuzzFeed: News, Tasty, Quizzes','faceart.photo.editor.pro.face.camera' => 'Face Camera: Aging, Gender Test & Emotion Change','com.locate.number.find.world' => 'Phone Number Info','com.sail.advanced.booster' => 'Deep Booster - Personal Phone Cleaner & Booster','com.oppanagames.car.simulator' => 'Car Simulator 2','com.oppanagames.car.simulator.c63' => 'Car Simulator C63','com.OppanaGames.CarSim.m5.f90' => 'Car Simulator M5','com.OppanaGames.OffroadPatriot' => 'Offroad Patriot','com.OppanaGames.Lexus.Simulator' => 'Offroad LX Simulator','com.OppanaGames.Test.Drive.Vesta.Simulator' => 'Vesta&VestaSW','com.OG.Driver.Simulator.Life' => 'Driver Simulator - Fun Games For Free','com.OppanaGames.RussianCarsVesta' => 'Russian Cars: VESTA','com.OppanaGames.Gelik2Sim' => 'Offroad G-Class','com.OppanaGames.CrimeSimulatorGameFree' => 'Crime Simulator - Game Free','com.OppanaGames.SafariHunting4x4' => 'Safari Hunting 4x4','com.OppanaGames.Lamborghini' => 'Car Simulator Veneno','com.OppanaGames.OffroadCruiserSim2' => 'Offroad Cruiser Simulator','com.OppanaGames.CarSim' => 'Car Simulator OG','com.OppanaGames.Real.Cars.VestaSW' => 'Russian Cars: VestaSW','com.OppanaGames.PickupTruckSim' => 'Offroad Pickup Truck Simulator','com.OppanaGames.HuntingSimulator4x4' => 'Hunting Simulator 4x4','com.OppanaGames.Neighbor2' => 'Neighbors OG','com.OppanaGames.EuropeanHunting4x4' => 'European Hunting 4x4','com.OppanaGames.MuscleCarSimulator' => 'Muscle Car Simulator','com.OppanaGames.OffroadPickupTruckF150' => 'Offroad Pickup Truck F','com.OppanaGames.Lambo_Veneno' => 'Lambo Car Simulator','com.OppanaGames.MuscleCarZL' => 'Muscle Car ZL','com.OppanaGames.OffroadPickupTruckSilverado' => 'Offroad Pickup Truck S','com.OppanaGames.GelikSim' => 'Offroad Car G','com.OppanaGames.MuscleCarChallenger' => 'Muscle Car Challenger','com.OppanaGames.TahoeSim' => 'Offroad Suburban','com.OppanaGames.OffroadPickupTruckR' => 'Offroad Pickup Truck R','com.OppanaGames.MuscleCarMustang' => 'Muscle Car Mustang','com.OppanaGames.BmwSim' => 'Offroad Car X','com.OppanaGames.Racing.Speed.Vesta' => 'Vesta Racing','com.OppanaGames.MercedesSim' => 'Offroad Car GL','com.OppanaGames.LuxuryPoliceCar' => 'Luxury Police Car','com.OppanaGames.EscaladeSim' => 'Offroad Escalade','com.OppanaGames.RoverSim' => 'Offroad Rover','com.OppanaGames.AudiSim' => 'Offroad Car Q','com.OppanaGames.infinitysim' => 'Offroad Car QX','com.OppanaGames.PorscheSim' => 'Offroad Cayenne','com.OppanaGames.CruiserSim' => 'Offroad Cruiser','com.OppanaGames.Neighbor' => 'Neighbor','com.OppanaGames.UrbanCarSim' => 'Urban Car Simulator','com.OppanaGames.LexusSim' => 'Offroad Car LX','com.OppanaGames.VeyronChironSim' => 'VeyronChiron Simulator','com.OppanaGames.SimPriorik' => 'Tinted Car Simulator','com.OppanaGames.Russian.Crime.Simulator' => 'Russian Crime Simulator','com.OppanaGames.real.gangster.crime.simulator.free' => 'Real Gangster Crime Simulator','com.OppanaGames.AmericanHunting4x4Deer' => 'American Hunting 4x4: Deer','com.OppanaGames.Russian_Hunting_4x4' => 'Russian Hunting 4x4','com.OppanaGames.Luxury.Safari.Hunting' => 'Safari Hunting: Free Shooting Game','com.OppanaGames.AutoPolizei' => 'Offroad Police Car DE','com.OppanaGames.Taxi' => 'Real Taxi Simulator','com.OppanaGames.RussianCarsPriora' => 'Russian Cars: Priorik','com.OppanaGames.VolvoSim' => 'Offroad Car XC','com.OppanaGames.i8' => 'Supercar i8','com.OppanaGames.RussianCars8' => 'Russian Cars: 8 in City','com.OppanaGames.Corvette' => 'Sport Car Corvette','com.OppanaGames.CarSimCorolla' => 'Popular Japanese Car','com.OppanaGames.Solaris' => 'Popular Car Driving','com.OppanaGames.real.gangster.crime.simulator' => 'Real Gangster Crime Simulator 3D','com.OppanaGames.PoliceCarChase' => 'Police Car: Chase','com.OppanaGames.RealCrimeRussianCity' => 'Real Crime In Russian City','com.oppanagames.luxuryparking' => 'Luxury Parking','com.OppanaGames.RealCrimeSimulator' => 'Real Crime Simulator OG','com.OppanaGames.HammerSim' => 'Offroad Car H','com.OppanaGames.AutoTheftCrimeSimulator' => 'Auto Theft Simulator','com.OppanaGames.RussianCrime' => 'Russian Crime OG','com.OppanaGames.Car.Simulator.M3' => 'Car Simulator M','com.OppanaGames.CrownVictoria' => 'Legendary Cars: Crown','com.OppanaGames.Supercar_SLS' => 'Luxury Supercar Simulator','com.OppanaGames.Racing.Speed.Muscle' => 'Racing Speed Muscle Cars','com.OppanaGames.RussianCarsOffroad' => 'Russian Cars: Offroad 4x4','com.OppanaGames.CrimeTransporter' => 'Crime Transporter','com.OppanaGames.TrafficTank2' => 'Tank Traffic Racer 2','com.OppanaGames.TrafficTank' => 'Tank Traffic Racer','com.OppanaGames.OffroadDrift' => 'Off-road Car Drift','com.OppanaGames.WV.Golf' => 'Legendary Cars: Golf','com.OppanaGames.MotoExtreme3D' => 'Moto Extreme 3D','com.og.fastfuriousdrag' => 'Furious Drag','com.OppanaGames.SUVTrafficRacer' => 'SUV Traffic Racer');
	return $nameApp[$id];
}
function zone_id($id){
    $arrData = ['virus.cleaner.antivirus.phone.security.boost' => '201901','phone.cleaner.antivirus.speed.booster' => '201901','com.art.color.number.coloring.book' => '201902','com.magic.puzzle.word.connect.travel' => '201902','com.bongolight.pixelcoloring' => '201902','com.pixel.art.coloring.color.by.number' => '201902','com.fingerstudios.solitaire.classic' => '201902','com.myapp.sweethouse' => '201903','com.myapp.sugarStore' => '201903','com.castle.play' => '201903','real.robot.car.tranforming.battle.city.formula.dragon' => '201904','car.stunt.racing.crazy.ramp.driving.impossiable.tracks' => '201904','com.fsjj.cerescleaner' => '201905','com.archery.go.bow.arrow.king.sports.game' => '201906','bumperbattle.io.game' => '201906','pool.master.billiards.ball.games' => '201906','boat.rider.game.race.row.kayak.adventure' => '201906','io.games.poolio.ballpool.game' => '201906','com.buzzfeed.tasty' => '201907','com.buzzfeed.android' => '201907','faceart.photo.editor.pro.face.camera' => '201908','com.locate.number.find.world' => '201909','com.sail.advanced.booster' => '201910','com.oppanagames.car.simulator' => '201911','com.oppanagames.car.simulator.c63' => '201911','com.OppanaGames.CarSim.m5.f90' => '201911','com.OppanaGames.OffroadPatriot' => '201911','com.OppanaGames.Lexus.Simulator' => '201911','com.OppanaGames.Test.Drive.Vesta.Simulator' => '201911','com.OG.Driver.Simulator.Life' => '201911','com.OppanaGames.RussianCarsVesta' => '201911','com.OppanaGames.Gelik2Sim' => '201911','com.OppanaGames.CrimeSimulatorGameFree' => '201911','com.OppanaGames.SafariHunting4x4' => '201911','com.OppanaGames.Lamborghini' => '201911','com.OppanaGames.OffroadCruiserSim2' => '201911','com.OppanaGames.CarSim' => '201911','com.OppanaGames.Real.Cars.VestaSW' => '201911','com.OppanaGames.PickupTruckSim' => '201911','com.OppanaGames.HuntingSimulator4x4' => '201911','com.OppanaGames.Neighbor2' => '201911','com.OppanaGames.EuropeanHunting4x4' => '201911','com.OppanaGames.MuscleCarSimulator' => '201911','com.OppanaGames.OffroadPickupTruckF150' => '201911','com.OppanaGames.Lambo_Veneno' => '201911','com.OppanaGames.MuscleCarZL' => '201911','com.OppanaGames.OffroadPickupTruckSilverado' => '201911','com.OppanaGames.GelikSim' => '201911','com.OppanaGames.MuscleCarChallenger' => '201911','com.OppanaGames.TahoeSim' => '201911','com.OppanaGames.OffroadPickupTruckR' => '201911','com.OppanaGames.MuscleCarMustang' => '201911','com.OppanaGames.BmwSim' => '201911','com.OppanaGames.Racing.Speed.Vesta' => '201911','com.OppanaGames.MercedesSim' => '201911','com.OppanaGames.LuxuryPoliceCar' => '201911','com.OppanaGames.EscaladeSim' => '201911','com.OppanaGames.RoverSim' => '201911','com.OppanaGames.AudiSim' => '201911','com.OppanaGames.infinitysim' => '201911','com.OppanaGames.PorscheSim' => '201911','com.OppanaGames.CruiserSim' => '201911','com.OppanaGames.Neighbor' => '201911','com.OppanaGames.UrbanCarSim' => '201911','com.OppanaGames.LexusSim' => '201911','com.OppanaGames.VeyronChironSim' => '201911','com.OppanaGames.SimPriorik' => '201911','com.OppanaGames.Russian.Crime.Simulator' => '201911','com.OppanaGames.real.gangster.crime.simulator.free' => '201911','com.OppanaGames.AmericanHunting4x4Deer' => '201911','com.OppanaGames.Russian_Hunting_4x4' => '201911','com.OppanaGames.Luxury.Safari.Hunting' => '201911','com.OppanaGames.AutoPolizei' => '201911','com.OppanaGames.Taxi' => '201911','com.OppanaGames.RussianCarsPriora' => '201911','com.OppanaGames.VolvoSim' => '201911','com.OppanaGames.i8' => '201911','com.OppanaGames.RussianCars8' => '201911','com.OppanaGames.Corvette' => '201911','com.OppanaGames.CarSimCorolla' => '201911','com.OppanaGames.Solaris' => '201911','com.OppanaGames.real.gangster.crime.simulator' => '201911','com.OppanaGames.PoliceCarChase' => '201911','com.OppanaGames.RealCrimeRussianCity' => '201911','com.oppanagames.luxuryparking' => '201911','com.OppanaGames.RealCrimeSimulator' => '201911','com.OppanaGames.HammerSim' => '201911','com.OppanaGames.AutoTheftCrimeSimulator' => '201911','com.OppanaGames.RussianCrime' => '201911','com.OppanaGames.Car.Simulator.M3' => '201911','com.OppanaGames.CrownVictoria' => '201911','com.OppanaGames.Supercar_SLS' => '201911','com.OppanaGames.Racing.Speed.Muscle' => '201911','com.OppanaGames.RussianCarsOffroad' => '201911','com.OppanaGames.CrimeTransporter' => '201911','com.OppanaGames.TrafficTank2' => '201911','com.OppanaGames.TrafficTank' => '201911','com.OppanaGames.OffroadDrift' => '201911','com.OppanaGames.WV.Golf' => '201911','com.OppanaGames.MotoExtreme3D' => '201911','com.og.fastfuriousdrag' => '201911','com.OppanaGames.SUVTrafficRacer' => '201911'];
    return $arrData[$id];
}
function devName($aid){
	$arrDev = ['201901' => 'Super Security Studio','201902' => 'Magic Arts','201903' => 'MAFT Wirelles','201904' => 'First Car Games','201905' => 'Ace Star Corp','201906' => 'X Games Tube','201907' => 'Buzzfeed','201908' => 'AI Face Tech','201909' => 'PH Dev','201910' => 'Deepbooster Team','201911' => 'Oppana Ganes'];
	return $arrDev[$aid];
}
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

$android_id = getRandDeviceID(8)."-".getRandDeviceID(4)."-".getRandDeviceID(4)."-".getRandDeviceID(4)."-".getRandDeviceID(12);


$microtime = round(microtime(true)*1000);
$impid = $microtime.getRandNum(9);
$yob = rand(1970,1999);
$userID = md5(getRandAll(10));
$dpidsha1 = sha1($android_id);
$dpidmd5 = md5($android_id);
$connectiontype = rand(2,6);

$country_json = $countryAl[$get->country->isoCode];
$query = 'yob='.$yob.'&userid='.$userID.'&dpidsha1='.$dpidsha1.'&dpidmd5='.$dpidmd5.'&connectiontype='.$connectiontype.'&md5bundle='.md5($bundle).'&bundle='.$bundle.'&ip='.$ip.'&country='.$country_json.'&android_id='.$android_id.'&appname='.rawurlencode(nameAPP($bundle)).'&appid='.zone_id($bundle).'&gender='.gender().'&devName='.rawurlencode(devName(zone_id($bundle)));
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
$arr_url = ['adsrv1.rootends.com', 'adsrv2.rootends.com'];
$fullurl1 = 'http://adsrv2.rootends.com/app/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=300x250';
$fullurl2 = 'http://'.$arr_url[array_rand($arr_url)].'/waardexapp/?impid='.$microtime.getRandNum(9).'&'.$query.'&size=300x250';
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
<script type="text/javascript" src="<?=$fullurl1?>"></script>
<script type="text/javascript" src="<?=$fullurl2?>"></script>
<div id="banner" style="z-index:-1;top:0px;left:0px; position:absolute"></div>
<p id="error"></p>
</body>
</html>