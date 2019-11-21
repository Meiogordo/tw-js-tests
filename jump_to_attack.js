// For usage in (at least) a report page, jumps to the troop placement page with the defender coordinates (attack defender)
(() => {
    const SPIN_END_CHECK_DELAY_MS = 10;

    const defender_context_btn = document.querySelector("#attack_info_def a.ctx");
    defender_context_btn.click();
    const click_place_after_spin_end = () => {
        if (defender_context_btn.classList.contains("spin")) {
            // Still loading something, the button is probably not yet ready so just wait some more
            setTimeout(click_place_after_spin_end, SPIN_END_CHECK_DELAY_MS);
            return;
        }

        // Done! The button (probably) exists now!
        const attack_context_btn = document.querySelector("#ctx_place");
        attack_context_btn.click();
    };

    // Kickstart the checks!
    setTimeout(click_place_after_spin_end, SPIN_END_CHECK_DELAY_MS);
})();
