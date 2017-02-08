javascript:

var delaybetween = 201; //delay between clicks - less than 200 can result in problems
var dist = 0; //holds the distance to compare with maxDist
var untreateddist = ""; //dist before being treated (1.000 for example vs 1000)
var maxDist = parseInt(localStorage["tribosmaxDistAS"]);
var index = 1;
var lightqtd = 0; //qtd of cls, use to detect end
var scoutqtd = 0; //qtd of scouts, also use to detect end

if(maxDist == 0 || !maxDist){
	alert("Por favor definir distância com o outro botão ou usando o localStorage de valor tribosmaxDistAS");
} else {

$(".farm_icon_c").each(function(i, elem){	

	setTimeout(function(){	

	lightqtd = parseInt($("#light").text());
	scoutqtd = parseInt($("#spy").text());
	
	//final test, managed to stop extra cleeks - afaik break does nothing inside setTimeout so it will be scrapped
	/*
	if(lightqtd == 0){
		return false; //breaks loop
	}
	*/

	if( !$(elem).hasClass("farm_icon_disabled") && lightqtd > 0 && scoutqtd > 0)
	{
		untreateddist = $(elem).parent().prev().prev().prev().text();
		dist = parseFloat(untreateddist);

		if(dist<=maxDist){
			$(elem).click();
		}

	}

	},index * delaybetween);
	index++;
}
);

}