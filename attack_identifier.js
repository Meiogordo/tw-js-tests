(() => {
	//// Helper definitions
	const troopTimes = [18, 22, 9, 10, 11, 30, 35];
	const troopNames = ["Lanceiros, Vikings ou Arqueiros", "Espadachins", "Batedores", "Cavalaria Leve, Arqueiros a Cavalo ou Paladino", "Cavalaria Pesada", "Aríetes ou Catapultas", "Nobre"];

	const getVillagesFullNames = () => [...document.querySelectorAll(".village_anchor.contexted")].map(node => node.textContent);

	const village_full_name_coords_regex = /\((...)\|(...)\) K..$/;
	const villageFullNameToCoords = (village_full_name) => village_full_name_coords_regex.exec(village_full_name);

	const distanceFromCoords = ([x1, y1], [x2, y2]) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

	// Returns a String formatted as HH:MM:SS
	const timeFromDistanceAndUnitTime = (distance) => (unit_time_mins) => {
		//minutes -> seconds to print in hh:mm:ss using Date object
		return new Date(distance * unit_time_mins * 60 * 1000).toISOString().substr(11, 8);
	}

	//// Program start
	// village 1 - attack origin
	// village 2 - attack destination

	// The village full names, string with name and coordinates - Format: nameyadayadayada (xxx|yyy) Kzz
	const [village1, village2] = getVillagesFullNames();

	const [_, village1_x, village1_y] = villageFullNameToCoords(village1);
	const [__, village2_x, village2_y] = villageFullNameToCoords(village2);
	const distance = distanceFromCoords([village1_x, village1_y], [village2_x, village2_y]);
	const timeFromUnitTime = timeFromDistanceAndUnitTime(distance);

	// TODO: Make myself prouder of this by using map/reduce/both
	const times = {};
	for (let i = 0; i < troopTimes.length; ++i) {
		times[troopNames[i]] = timeFromUnitTime(troopTimes[i]);
	}

	console.log("distance", distance);
	console.log("times", times);
})();

//exemplo para analisar dps:
//(451|375) (450|372) tem distance 3,16 campos

//distance * unitSpeed - dá um decimal de tempo em mins, dps converter em hh:mm:ss

//from StackOverflow - obv

//var date = new Date(null);
//date.setSeconds(Math.sqrt(10) * 10 * 60); // specify value for SECONDS here
//date.toISOString().substr(11, 8);
