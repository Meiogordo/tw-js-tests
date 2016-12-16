javascript:

/*table = document.getElementById('content_value');

vizold = table.getElementsByClassName('vis');
*/


//same as above but simplified
//viz = document.getElementById('content_value').getElementsByClassName('vis');
//o viz é 100% unnecessary


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

//exemplo para analisar dps:
//(451|375) (450|372) tem dist 3,16 campos
//Nota: root é Math.sqrt(x)
//Formula campos: sqrt((x1-x2)^2 + (y1-y2)^2)

//(Math.sqrt(dist) * unitSpeed) - dá um decimal de tempo, dps converter em hh:mm:ss

//from StackOverflow - obv

//var date = new Date(null);
//date.setSeconds(Math.sqrt(10) * 10 * 60); // specify value for SECONDS here
//date.toISOString().substr(11, 8);