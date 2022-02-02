const jumpLinks = document.querySelectorAll("a[href^='#']");
let verseSelection;
let urlBeg = "https://www.biblegateway.com/passage/?search=";
let urlEnd = "&version=NASB1995";
let verse;

jumpLinks.forEach(link => {//get the selected verse
    link.addEventListener('click', event => {
       event.preventDefault();
       
       if (link) {
        verseSelection = (link.innerHTML);
        
        getVerse(verseSelection);
       }
    });   
});

function getVerse(verseSelection) {
    // console.log(selection);
    // window.open(urlBeg + selection + urlEnd);
    let result = verseSelection.replace(/\s/g, "");//removes whitespace
    // window.open(urlBeg + result + urlEnd);
    sessionStorage.setItem('verse', verseSelection);
    window.open("verse.html", "_self");
}
