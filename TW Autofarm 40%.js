//temp just to save
//parseInt($(".farm_icon_b")[1].tooltipText.split(" ")[11].substring(2))
//I think this gets the value of cls in the b model, used also for a and generalization of 40% thing

javascript:

//big note: for the meantime assuming A is 5 cls 1 bat and B 12 cls 1 bat
//todo: generalize

var presetAcls = 5;
var presetBcls = 12;

var iconCdatathing = $(".farm_icon_c").attr("data-units-forecast");

if (iconCdatathing != null){

//gets light cav in ""light":x" format, where x is the value of CLs to send.
var textocls = iconCdatathing.split(",")[5];

//gets value of cls in C button
var qtdcls = parseInt(textocls.substring(textocls.indexOf(":")+1));

if(qtdcls<presetAcls){
	//click C here
} else {
	//insert crazy 40% math here, for 5 and 12 it's <21 for 5 and >=21 for 12
	//tip: use spread excel with 40% values for each... have to find the middle point basically...
}

//Refresh, will need for the future because the value isn't update afaik... Yes, confirmed - Scrapped old href = href because it caused problems with models
//location.reload(); temp removed for testing

} else {

	alert("O script deve ser corrido na página do assistente de saque.");

}