javascript:

/*table = document.getElementById('content_value');

vizold = table.getElementsByClassName('vis');
*/


//same as above but simplified
//viz = document.getElementById('content_value').getElementsByClassName('vis');
//o viz é 100% unnecessary


//textoaldeia1 = document.getElementsByClassName('village_anchor contexted')[0].outerText; //aldeia 1
//textoaldeia2 = document.getElementsByClassName('village_anchor contexted')[1].outerText; //aldeia 2

//agora em jQuery, o resto deu byebye
var textoaldeia1 = $(".village_anchor.contexted")[0].outerText;
var textoaldeia2 = $(".village_anchor.contexted")[1].outerText;

