//var got = document.getElementsByClassName('small grey')[0].parentElement.textContent.trim();
//deprecated for new jQuery stuff, learning this
var got = $(".small.grey").parent().text().trim();
//this will get the time from the report - still have to parse it
//Date example: "14/Dez/2016 (11:30:09):008"
//Date under format: day/monthText/year (hour:min:second):milisecond
