javascript:

//textoaldeia1 = document.getElementsByClassName('village_anchor contexted')[0].outerText; //aldeia 1
//textoaldeia2 = document.getElementsByClassName('village_anchor contexted')[1].outerText; //aldeia 2

//aldeia 1 - attack origin
//aldeia 2 - attack destination

//agora em jQuery, o resto deu byebye
var textoAldeia1 = $(".village_anchor.contexted")[0].outerText;
var textoAldeia2 = $(".village_anchor.contexted")[1].outerText;

//getting coords - formatted as  (xxx|yyy)
var coordsAldeia1 = textoAldeia1.substr(textoAldeia1.lastIndexOf('(') , 9);
var coordsAldeia2 = textoAldeia2.substr(textoAldeia2.lastIndexOf('(') , 9);

//Troops: troopTimes for time and troopNames for names
var troopTimes = [18, 22, 9, 10, 11, 30, 35];
var troopNames = ["Lanceiros, Vikings ou Arqueiros", "Espadachins", "Batedores", "Cavalaria Leve, Arqueiros a Cavalo ou Paladino", "Cavalaria Pesada", "Aríetes ou Catapultas", "Nobre"];


//Getting distance: Expectes coords in (xxx|yyy) format
function getDistanceFromCoords(coord1, coord2){

	var coord1x = parseInt(coord1.substr(1,3));
	var coord2x = parseInt(coord2.substr(1,3));
	var coord1y = parseInt(coord1.substr(5,3));
	var coord2y = parseInt(coord2.substr(5,3));

	//Math.pow(x,y) => x^y
	//Math.sqrt(x) => square root of x

	var output = Math.sqrt(Math.pow((coord1x - coord2x),2) + Math.pow((coord1y - coord2y),2));
	//root((x1-x2)^2 + (y1-y2)^2)
	return output;

}

function getTimeFromDistanceAndUnitType(distance, unit){

	var timeMinDecimal = distance * troopTimes[unit];
	var dateConverter = new Date(null);
	dateConverter.setSeconds(timeMinDecimal * 60);
	//minutes -> seconds to print in hh:mm:ss using Date object
	return dateConverter.toISOString().substr(11, 8);

}

//exemplo para analisar dps:
//(451|375) (450|372) tem distance 3,16 campos

//distance * unitSpeed - dá um decimal de tempo em mins, dps converter em hh:mm:ss

//from StackOverflow - obv

//var date = new Date(null);
//date.setSeconds(Math.sqrt(10) * 10 * 60); // specify value for SECONDS here
//date.toISOString().substr(11, 8);