// ==UserScript==
// @name         Letterboxd Ratings Total
// @version      0.1
// @description  Show number of total ratings
// @author       liuminex
// @match        https://letterboxd.com/film/*
// @run-at       document-end
// ==/UserScript==


function getElByXPath(xpath){
    var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}

// where the button will be inserted
function findRes(){
    return getElByXPath("/html/body/div[2]/div/div/div[2]/aside");
}
function findNumba(){
    return getElByXPath("/html/body/div[2]/div/div/div[2]/aside/section[2]/span/a");
}

function findRatings(){
    const numbas = findNumba().getAttribute("data-original-title").split(" ");

    const numba = numbas[6];

    findRes().innerHTML += "<p style='font-size: 0.95em; width: 100%; text-align: center; padding-top: 7px'>" + numba + "</p>";
}

// wait until findRes element exist:
var checkExist = setInterval(function() {
    if (findRes() && findNumba()) {
        clearInterval(checkExist);
        findRatings();
    }
}, 100);


