// ==UserScript==
// @name            No Pornhub Verificaiton & spankbang
// @namespace       npv
// @version         1.3.3.7
// @description:ru  Удаляет проверку на возраст на сайте PornHub & Spankbang
// @description     Removes age verification on the PornHub & spankbang
// @author          https://github.com/MasedMSD
// @match           *://*.pornhub.com/*
// @match           *://*.pornhub.org/*
// @match           *://*.spankbang.com/*
// @icon            https://ei.phncdn.com/www-static/favicon.ico
// @downloadURL     https://github.com/MasedMSD/No-PornHub-Verification/raw/refs/heads/main/no-pornhub-verification.user.js
// @updateURL       https://github.com/MasedMSD/No-PornHub-Verification/raw/refs/heads/main/no-pornhub-verification.user.js
// @grant           GM_addStyle
// ==/UserScript==

(function no_pornhub_verification() {
	"use strict";
	document.getElementsByClassName("ageDisclaimer")[0]?.remove();
	document.getElementById("ageDisclaimerMainBG")?.remove();
	document.getElementById("ageDisclaimerOverlay")?.remove();

	// Фикс скролла и блюра для андроида
	document.body.classList?.remove("is-blurred");
	GM_addStyle(`
        .isOpenMTubes {
            overflow: auto !important;
        }
    `);

	Object.values(document.getElementsByTagName("link"))
		.find(link => link.href.includes("css/modals_commons.css"))
		?.remove(); // Без этого не работает скролл

	["container", "wrapper"].forEach(function (id) {
		document.getElementById("age-verification-" + id)?.remove();
	});

    //spankbang
    document.querySelectorAll('.strong-blur').forEach(el => {
        el?.classList.remove('strong-blur');
    });
    document.getElementById('av-wrapper')?.remove();
    document.getElementById('safety-blur')?.remove();
    for (let i of document.getElementsByClassName('absolute inset-0 z-10 flex items-center justify-center')) {
        i.remove();
    }
    document.body?.classList.remove('fixed', 'h-full', 'w-full'); //scroll fix

    //video autoplay on hover not fixed :/
    setTimeout(() => {no_pornhub_verification()}, 1000);
})();