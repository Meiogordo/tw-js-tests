javascript:

$("#attack_info_def .ctx").click();
//clicar na ceninha de opções do defensor aka aldeia atacada aka farm - useless para o que se segue logo retired - lies, preciso de clicar para ele gerar o link de atk, clicar antes e dps largar

//$("#ctx_place.village_ctx");
//clicar no símbolo de ataque que se abre - n faz nada logo retired

//var baseUrl = 'https://pt51.tribalwars.com.pt';
//hard coded 51, mas prefiro arranjar uma solução independente de ter de mudar o mundo every time
//aqui está
var baseUrl	= window.location.href.substring(0,window.location.href.indexOf('?'))
//dá "https://pt51.tribalwars.com.pt/game.php" para o 51 por ex - depois ir a partir do ?

var atklink = $("#ctx_place.village_ctx").attr("href");
//devolve o href (aka link para onde iria) do botao de ataque
atklink = atklink.substring(atklink.indexOf('?'));

window.location.href = baseUrl + atklink;

//continuar mais tarde bc fpro zzzzz