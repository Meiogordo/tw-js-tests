javascript:

var comparison = "0:02:59";

function clicaNessaBeep(){
	
	var currentTime = document.getElementsByClassName('nowrap lit-item')[0].textContent.trim();

	if(currentTime < comparison){

		document.getElementsByClassName('order_feature btn btn-btr btn-instant-free')[0].click();
		//risky atm, I'll test with alerts - nah screw it
		
		//log na consola para saber que ativou
		console.log('Script runando');

	}

}

setInterval(clicaNessaBeep, 3000); //cuidado com este valor, é em ms, n pôr baixo demais
