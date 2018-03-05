// ==UserScript==
// @name         WaniKani Hider
// @namespace    http://www.david-gouveia.com/
// @version      1.0
// @description  Hides solutions until you hover while browsing content by level on WaniKani
// @author       David Gouveia
// @match        https://www.wanikani.com/kanji?difficulty=*
// @match        https://www.wanikani.com/radicals?difficulty=*
// @match        https://www.wanikani.com/vocabulary?difficulty=*
// @match        https://www.wanikani.com/level/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    for(let item of document.getElementsByClassName("character-item")) {
        let ul = item.getElementsByTagName("ul")[0];
        ul.style.visibility = "hidden";
        item.addEventListener("mouseenter", () => ul.style.visibility = "visible");
        item.addEventListener("mouseleave", () => ul.style.visibility = "hidden");
    }
})();
