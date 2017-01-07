javascript:

(function() {
if (game_data.screen == "report"){
	
	spy = document.getElementById('attack_spy_resources');
	var output = "";
	var out2 = 0;
	for (i=0;i<spy.getElementsByClassName('nowrap').length;i++) {

		//output += spy.getElementsByClassName('nowrap')[i].children[0].title + ': ' + spy.getElementsByClassName('nowrap')[i].textContent + "\n"
		//out2 += parseInt(spy.getElementsByClassName('nowrap')[i].textContent);

		//testar para lidar com 1.x (maiores que 1000)

		if(spy.getElementsByClassName('nowrap')[i].textContent.indexOf('.') == -1){
			//caso base - same as before
			out2 += parseInt(spy.getElementsByClassName('nowrap')[i].textContent);

		}else{

			out2 += parseInt(spy.getElementsByClassName('nowrap')[i].textContent.trim().substr(0,1)) * 1000 + parseInt(spy.getElementsByClassName('nowrap')[i].textContent.trim().substring(2));

		}

	}

	//output de recs individuais
	//alert(output); 

	//output da soma
	//alert("Total: " + out2 + "\nSerão precisos " + out2/80 + " cls.");
	//Retired para novo output com UI.InfoMessage
		
	UI.InfoMessage("Total: " + out2 + "</br>Serão precisos " + out2/80 + " cls.",4000);
	
}})()