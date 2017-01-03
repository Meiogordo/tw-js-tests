javascript:

var comparison = "0:02:59";

function clicaNessaBeep(){
	
	var currentTime = document.getElementsByClassName('nowrap lit-item')[0].textContent.trim();

	if(currentTime < comparison){

		document.getElementsByClassName('order_feature btn btn-btr btn-instant-free')[0].click();
		//risky atm, I'll test with alerts - nah screw it
		//clicaNessaBeep(); removed because it crashed the page lol
		//if found, recheck, cos there might be another one up that is also <3min - this way spam wall at beginning is almost instant

	}

}

setInterval(clicaNessaBeep, 3000); //cuidado com este valor, é em ms, n pôr baixo demais

//log na consola para saber que ativou
console.log('Script runando');
