javascript:


spy = document.getElementById('attack_spy_resources');


if (spy == null){
	alert('O script deve ser corrido num relatório');
}
	else {

	var output = "";
	var out2 = 0;
	for (i=0;i<spy.getElementsByClassName('nowrap').length;i++) {

		/*
		console.log(spy.getElementsByClassName('nowrap')[i].children[0].title + ': ');
		console.log(spy.getElementsByClassName('nowrap')[i].textContent);
		*/

		output += spy.getElementsByClassName('nowrap')[i].children[0].title + ': ' + spy.getElementsByClassName('nowrap')[i].textContent + "\n"
		out2 += parseInt(spy.getElementsByClassName('nowrap')[i].textContent);

		//texto[i] = spy.getElementsByClassName('nowrap')[i].children[0].title + ': ' + spy.getElementsByClassName('nowrap')[i].textContent
		//alert(spy.getElementsByClassName('nowrap')[i].children[0].title + ': ' + spy.getElementsByClassName('nowrap')[i].textContent);

	}

	
	//output de recs individuais
	//alert(output); 

	//output da soma
	alert("Total: " + out2 + "\nSerão precisos " + out2/80 + " cls.");
	
}