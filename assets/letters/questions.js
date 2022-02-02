let letterName;
let storedVerse;
const verseShow = document.getElementById("show-verse");
const verseWindow = document.getElementById("verse-content");
let url = "https://goingfarther.net/common-questions/?utm_source=Forgive.me&utm_medium=Link&utm_content=i-have-a-question&utm_campaign=Forgive.me&outreach=Forgive.me";
let urlEnd = "&version=NASB1995";

window.onload = function() {
    storedVerse = sessionStorage.getItem('verse');
    // verseShow.innerHTML = storedVerse;
    verseWindow.src = (url);
}

function backToLetter() {
    // console.log(sessionStorage.getItem('storedSelection') + " available in session storage");
    letterName = sessionStorage.getItem('storedSelection');
    letterWindow = (letterName + ".html");
    window.open(letterWindow, "_self");
}