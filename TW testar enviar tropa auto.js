javascript:

//$("#attack_info_def .ctx").click();
//clicar na ceninha de opções do defensor aka aldeia atacada aka farm - useless para o que se segue logo retired

//$("#ctx_place.village_ctx");
//clicar no símbolo de ataque que se abre - n faz nada logo retired

var baseUrl = 'https://pt51.tribalwars.com.pt';
//hard coded 51, mas prefiro arranjar uma solução independente de ter de mudar o mundo every time

var atklink = $("#ctx_place.village_ctx").attr("href");
//devolve o href (aka link para onde iria) do botao de ataque

window.location.href = baseUrl + atklink;

//continuar mais tarde bc fpro zzzzz