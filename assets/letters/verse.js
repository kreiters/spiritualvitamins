let letterName;
let storedVerse;
const verseShow = document.getElementById("show-verse");
const verseWindow = document.getElementById("verse-content");
let urlBeg = "https://www.biblegateway.com/passage/?search=";
let urlEnd = "&version=NASB1995";

window.onload = function() {
    storedVerse = sessionStorage.getItem('verse');
    // verseShow.innerHTML = storedVerse;
    verseWindow.src = (urlBeg + storedVerse + urlEnd);
}

function backToLetter() {
    // console.log(sessionStorage.getItem('storedSelection') + " available in session storage");
    letterName = sessionStorage.getItem('storedSelection');
    letterWindow = (letterName + ".html");
    window.open(letterWindow, "_self");
}