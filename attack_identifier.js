(() => {
	//// Helper definitions
	const troopTimes = [9, 10, 11, 18, 22, 30, 35];
	const troopNames = ["Batedores", "Cavalaria Leve, Arqueiros a Cavalo ou Paladino", "Cavalaria Pesada", "Lanceiros, Vikings ou Arqueiros", "Espadachins", "Aríetes ou Catapultas", "Nobre"];

	const getVillagesFullNames = () => [...document.querySelectorAll(".village_anchor.contexted")].map(node => node.textContent);

	const village_full_name_coords_regex = /\((...)\|(...)\) K..$/;
	const villageFullNameToCoords = (village_full_name) => village_full_name_coords_regex.exec(village_full_name);

	const distanceFromCoords = ([x1, y1], [x2, y2]) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

	// Returns a String formatted as HH:MM:SS
	const timeFromDistanceAndUnitTime = (distance) => (unit_time_mins) => {
		//minutes -> seconds to print in hh:mm:ss using Date object
		return new Date(distance * unit_time_mins * 60 * 1000).toISOString().substr(11, 8);
	}

	const createTableFromTimeData = (times_by_troopname) => {
		const table = document.createElement("table");
		table.className = "vis";

		const first_row = document.createElement("tr");
		const unit_type_th = document.createElement("th");
		unit_type_th.textContent = "Tipo de Unidade";
		const time_th = document.createElement("th");
		time_th.textContent = "Tempo (hh:mm:ss)"
		first_row.appendChild(unit_type_th);
		first_row.appendChild(time_th);
		table.appendChild(first_row);

		// TODO: Highlight the most likely one based on the current duration value
		for (let unit_name in times_by_troopname) {
			const row = document.createElement("tr");
			const unit_type_name = document.createElement("td");
			unit_type_name.textContent = unit_name;
			const unit_time = document.createElement("td");
			unit_time.textContent = times_by_troopname[unit_name];

			row.appendChild(unit_type_name);
			row.appendChild(unit_time);
			table.appendChild(row);
		}

		return table;
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

	const parentElement = document.querySelector("table.main td#content_value");
	const distance_element = document.createElement("div");
	distance_element.textContent = `Distância: ${distance}`;
	parentElement.appendChild(distance_element);
	parentElement.appendChild(createTableFromTimeData(times));
})();

//exemplo para analisar dps:
//(451|375) (450|372) tem distance 3,16 campos

//distance * unitSpeed - dá um decimal de tempo em mins, dps converter em hh:mm:ss

//from StackOverflow - obv

//var date = new Date(null);
//date.setSeconds(Math.sqrt(10) * 10 * 60); // specify value for SECONDS here
//date.toISOString().substr(11, 8);
