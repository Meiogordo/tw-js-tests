
/**
 * Where to use: Report & Troop placement page
 * What it does: Calculates the necessary number of light cavalry to fully loot the spied resources.
 *               Then, in the troop placement page, places the calculated number of light cavalry and focuses the attack button
 */
(() => {
	const LOCALSTORAGE_KEY_ID = "meiogordo-report-farmer-cls"

    if (game_data.screen === "report") {
		const spy_resource_table = document.getElementById('attack_spy_resources');
		
		if (!spy_resource_table) {
			UI.ErrorMessage("É necessário enviar batedores (suficientes) para obter os recursos detetados e usar esta ferramenta!");
			return;
		}

		const resources = spy_resource_table.querySelectorAll("table tr td > span");
		let total_resources = 0;

		for (const resource of resources) {
			// numbers larger than 1000 have a '.' - 10.500, 1.994, 1.234, etc. - removing that
			total_resources += parseInt(resource.textContent.replace(".", ""));
		}

		// TODO: Ter em conta muralha
		const n_cls_calc = total_resources / 80;
		const n_cls_suggestion = Math.round(n_cls_calc) || 1;

		UI.InfoMessage(`
		<b>Nº de Recursos Totais:</b> ${total_resources}<br/>
		<b>Nº Cavalaria Leve Necessária:</b> ${n_cls_calc}<br/>
		<b>Sugestão Envio:</b> ${n_cls_suggestion}<br/>
		<b>Manter em atenção a muralha!</b>
		`, 6000);

		localStorage.setItem(LOCALSTORAGE_KEY_ID, n_cls_suggestion);

	} else if (game_data.screen === "place") {
		const suggested_cls = parseInt(localStorage.getItem(LOCALSTORAGE_KEY_ID));

		if (!suggested_cls) {
			UI.ErrorMessage("É necessário primeiro executar a ferramenta num relatório!");
			return;
		}

		// """Fulfill""" troop fields
		const spies_input = document.querySelector("input#unit_input_spy");
		spies_input.value = 1;
		const cls_input = document.querySelector("input#unit_input_light");
		cls_input.value = suggested_cls;

		UI.InfoMessage("Ataque de farm pronto para enviar!", 2000);

		// Focus send button, in order to use everything without needing to use the mouse :D
		const attack_send_btn = document.querySelector("#target_attack");
		attack_send_btn.focus();
	}
})();
