javascript:

var delaybetween = 201; //delay between clicks - menos de 200 pode dar probs
var dist = 0; //holds the distance to compare with maxDist
var untreateddist = ""; //dist before being treated (1.000 for example vs 1000)
var maxDist = parseInt(localStorage["tribosmaxDistAS"]);
var index = 1;
var lightqtd = 0; //qtd of cls, use to detect end

if(maxDist == 0){
	alert("Por favor definir distância com o outro botão ou usando o localStorage de valor tribosmaxDistAS");
}

$(".farm_icon_c").each(function(i, elem){


	lightqtd = parseInt($("#light").text());
	if(lightqtd == 0){
		return false; //breaks loop
	}

	if( !$(this).hasClass("farm_icon_disabled") )
	{
		untreateddist = $(this).parent().prev().prev().prev().text();
		dist = parseFloat(untreateddist);

		if(dist<=maxDist){
			setTimeout(function(){$(elem).click();},index * delaybetween);
			index++;	
		}

	} else {
		return true; //skip to next iteration - like continue in for loop
	}

}
);