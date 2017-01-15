//percorre os Cs clicáveis printando a distância
var dist = 0;
var maxDist = parseInt(localStorage["tribosmaxDistAS"]);
var index = 1;
$(".farm_icon_c").each(function(){

if( !$(this).hasClass("farm_icon_disabled") )
{
console.log("Checking dist");
dist = parseInt($(this).parent().prev().prev().prev().text())
setTimeout(function(){console.log("cliquei");},index * 500);
index++;
}
}
);