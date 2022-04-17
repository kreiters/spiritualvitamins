let d = new Date();
let day = d.getDay();
let prevDay = ((day - 1));
let nextDay = ((day + 1));
let imgMatrix = [{Evil: {img: "assets/scanned vitamins/evil.jpg"}},
 {Faith: {img: "assets/scanned vitamins/faith.jpg"}},
 {Forgiveness: {img: "assets/scanned vitamins/forgiveness.jpg"}},
 {Happiness: {img: "assets/scanned vitamins/happiness.jpg"}},
 {Ark: {img: "assets/scanned vitamins/ark.jpg"}},
 {Worship: {img: "assets/scanned vitamins/worship.jpg"}},
 {Promise: {img: "assets/scanned vitamins/promise.jpg"}},
 {Pray: {img: "assets/scanned vitamins/pray.jpg"}},
 {Spirit: {img: "assets/scanned vitamins/spirit.jpg"}},
 {Study: {img: "assets/scanned vitamins/study.jpg"}},
 {Sword: {img: "assets/scanned vitamins/sword.jpg"}},
 {Thankful: {img: "assets/scanned vitamins/thankful.jpg"}},
 {Think: {img: "assets/scanned vitamins/think.jpg"}},
 {Time: {img: "assets/scanned vitamins/time.jpg"}},
 {Rewards: {img: "assets/scanned vitamins/rewards.jpg"}},
 {Letters: {img: "assets/scanned vitamins/letters.jpg"}},
 {Love: {img: "assets/scanned vitamins/love.jpg"}},
 {Grace: {img: "assets/scanned vitamins/grace.jpg"}},
 {Wisdom: {img: "assets/scanned vitamins/wisdom.jpg"}},
 {Resurrection: {img: "assets/scanned vitamins/resurrection.jpg"}},
 {Hope: {img: "assets/scanned vitamins/hope.jpg"}}];

let menuBtn = document.getElementById("menuBtn");
let infoScreen = document.getElementById("info");
let letterButton = document.getElementById("letterBtn");

//all scriptures and quotes moved to content.js file
// to access the scriptureMatrix, use: scriptureMatrix[0].Evil[0].sun
// or: scriptureMatrix[1].Forgiveness[0].sun
// or: scriptureMatrix[1].Forgiveness[1].mon   ....etc
let resurrectionDaysArray = ["Resurrection Sunday!", "Good Shepherd Monday", "Zion's Cornerstone Tuesday",
"Lord's Supper Wednesday", "Passover Thursday", "Crucifixion Friday", "Burial Saturday", "Palm Sunday"];
let resurrectionDaysMatrix = [{0: {prev: "7", next: "1"}}, {1: {prev: "0", next: "2"}},
 {2: {prev: "1", next: "3"}}, {3: {prev: "2", next: "4"}},
  {4: {prev: "3", next: "5"}}, {5: {prev: "4", next: "6"}},
   {6: {prev: "5", next: "7"}}, {7: {prev: "6", next: "0"}}];
let resurrectionShortDaysArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "bonus"];


let daysArray = ["Sacred Sunday", "Marvelous Monday", "Terrific Tuesday",
 "Wonderful Wednesday", "Thankful Thursday", "Fabulous Friday", "Satisfying Saturday"];
let shortDaysArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let daysMatrix = [{0: {prev: "6", next: "1"}}, {1: {prev: "0", next: "2"}},
 {2: {prev: "1", next: "3"}}, {3: {prev: "2", next: "4"}},
  {4: {prev: "3", next: "5"}}, {5: {prev: "4", next: "6"}},
   {6: {prev: "5", next: "0"}}];
let displayedDay = document.getElementById("day-display");
let displayedPrevDay = shortDaysArray[prevDay];
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let currentDay = day;
displayedDay.innerHTML = "";
const series = document.getElementsByTagName("dropdown-content a");
const jumpLinks = document.querySelectorAll("a[href^='#']");
let selection;
let viewSelection = document.getElementById("show-selection");
viewSelection.innerHTML = "";
//prevBtn.innerHTML = "";//clears day from button
//nextBtn.innerHTML = "";
let dailyScript;
let scriptView = document.getElementById("scripture");
let viewInstruct = document.getElementById("show-instructions");


let dailyQuote;

let storedSelection;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//added 1/18/22   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
getState()//get the contents of localStorage if user went from vitamins to letter then back to vitamins

function getState() {//added this function to load previous series selections when returning to vitamin from letter or other screen
  console.log("getState function running...");
  selection = sessionStorage.getItem('storedSelection');
  
  if (selection == null) {
    // alert("session storage is: " + sessionStorage.getItem('storedSelection'));
    viewInstruct.style.display = "block";
    letterButton.style.display = "none";
  }
  else {
    viewInstruct.innerHTML = "";
    viewInstruct.style.display = "none";
    console.log(sessionStorage.getItem('storedSelection') + " available in session storage");
    // selection = sessionStorage.getItem('storedSelection');
    
    imgMatrix.forEach(image => {
      //console.log(image);
      letterButton.style.display = "block";
      document.getElementById("page-title").innerHTML = selection;
      //console.log(selection);
      if (image[selection]) {
        
        //console.log(image[selection].img);
        let selectedImg = image[selection].img;
        //console.log(selectedImg);
        // let imgRef = selectedImg;
        //console.log(imgRef);
        viewSelection.src = selectedImg;
        // scriptView.classList.toggle('view');
        scriptView.classList.remove('showScripture');
      }
    })
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function() {
  if (selection == "Resurrection") {//set days to special if series in memory is resurrection
    displayedDay.innerHTML = resurrectionDaysArray[currentDay];
  }
  else {
    displayedDay.innerHTML = daysArray[day];
    if (day == "0") {
        prevDay = "6";
        console.log("the prevDay is set to: ", prevDay);
    }
    if (day == "6") {
        nextDay = "0";
    }
    //prevBtn.innerHTML += shortDaysArray[prevDay];//adds day to button
    //nextBtn.innerHTML += shortDaysArray[nextDay];
    viewInstruct.style.display = "block";
  }
    
}

menuBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log("clicked on menu");
  infoScreen.style.display = "block";
});

function returnMain() {
  infoScreen.style.display = "none";
}

jumpLinks.forEach(link => {
 link.addEventListener('click', event => {
    event.preventDefault();
    
    if (link.innerHTML != "Home") {//keeps home from appearing in letter title
      // console.log("the link data-name is: ", link.getAttribute("data-name"));
      // selection = (link.innerHTML);//old way
      selection = link.getAttribute("data-name");
      saveState()//save the series selection to session storage
      imgMatrix.forEach(image => {
        //console.log(image)
        letterButton.style.display = "block";
        document.getElementById("page-title").innerHTML = selection;//add the series title to the letter

        if (image[selection]) {
          viewInstruct.style.display = "none";
          //console.log(image[selection].img);
          let selectedImg = image[selection].img;
          //console.log(selectedImg);
          // let imgRef = selectedImg;
          // console.log(imgRef);
          viewSelection.src = selectedImg;
          // scriptView.classList.toggle('view');
          scriptView.classList.remove('showScripture');
        }
      })
    }
  
    // resetting all day variables to the current day after a new series is selected
    let revertDay = d.getDay();
    if (selection == "Resurrection") {//set days to special if series in memory is resurrection
      displayedDay.innerHTML = resurrectionDaysArray[revertDay];
    }
    else {
    displayedDay.innerHTML = daysArray[revertDay];
    day = d.getDay();
    currentDay = day;
    prevDay = ((day - 1));
    nextDay = ((day + 1));
    }
  });
});




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function seriesSelect() {
  console.log("seriesSelect function running");
  //viewInstruct.style.display = "none";
  console.log("the scriptView class is: ", scriptView.className);
  document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
    //   console.log(daysArray[day]);
    //   console.log(viewSelection)//display what was selected
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  function prev() {
      //console.log("the days matrix is: ", daysMatrix[day]);
      if (selection == "Resurrection") {//set days to special if series in memory is resurrection
        if (day == "0") {
          day = 7;
          console.log("The day was 0");
          currentDay = 7;
          prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
          nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
          displayedDay.innerHTML = resurrectionDaysArray[currentDay];
          updateScripture()
        }
        else {
            day = day - 1;
            currentDay = currentDay - 1;
            prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
            nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
            displayedDay.innerHTML = resurrectionDaysArray[currentDay];
            updateScripture()  
        }
        
      }
      else {
        if (day == "0") {
            day = 6;
            console.log("The day was 0");
            currentDay = 6;
            prevDay = (daysMatrix[currentDay][currentDay].prev);
            nextDay = (daysMatrix[currentDay][currentDay].next);
            // nextDay = "0";
            // console.log("The current day is: ", daysArray[day]);
            // console.log("The prev day is: ", prevDay);
            // console.log("The next day is: ", nextDay);

            displayedDay.innerHTML = daysArray[currentDay];
            // prevBtn.innerHTML = shortDaysArray[prevDay];
            // nextBtn.innerHTML = shortDaysArray[nextDay];
            updateScripture()
            

        }
      
        else {
            day = day - 1;
            
            currentDay = currentDay - 1;
            prevDay = (daysMatrix[currentDay][currentDay].prev);
            nextDay = (daysMatrix[currentDay][currentDay].next);
            displayedDay.innerHTML = daysArray[currentDay];
            updateScripture()
            
        }
      }
  }

  function next() {
        //console.log("the days matrix is: ", daysMatrix[day]);
    if (selection == "Resurrection") {//set days to special if series in memory is resurrection
      if (day == "7") {
        day = 0;
        console.log("The day was 6");
        currentDay = 0;
        prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
        nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
        // nextDay = "0";
        // console.log("The current day is: ", daysArray[day]);
        // console.log("The prev day is: ", prevDay);
        // console.log("The next day is: ", nextDay);

        displayedDay.innerHTML = resurrectionDaysArray[currentDay];
        // prevBtn.innerHTML = shortDaysArray[prevDay];
        // nextBtn.innerHTML = shortDaysArray[nextDay];
        updateScripture()  
      }
      else {
          day = day + 1;
          currentDay = currentDay + 1;
          prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
          nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
          displayedDay.innerHTML = resurrectionDaysArray[currentDay];
          updateScripture()
          
      }
    }
    else {
      if (day == "6") {
          day = 0;
          console.log("The day was 6");
          currentDay = 0;
          prevDay = (daysMatrix[currentDay][currentDay].prev);
          nextDay = (daysMatrix[currentDay][currentDay].next);
          // nextDay = "0";
          // console.log("The current day is: ", daysArray[day]);
          // console.log("The prev day is: ", prevDay);
          // console.log("The next day is: ", nextDay);

          displayedDay.innerHTML = daysArray[currentDay];
          // prevBtn.innerHTML = shortDaysArray[prevDay];
          // nextBtn.innerHTML = shortDaysArray[nextDay];
          updateScripture()
          
      }
    
      else {
          day = day + 1;
          
          currentDay = currentDay + 1;
          prevDay = (daysMatrix[currentDay][currentDay].prev);
          nextDay = (daysMatrix[currentDay][currentDay].next);
          displayedDay.innerHTML = daysArray[currentDay];
          updateScripture()
          
      }
    }
}

//this function opens the scripture when the vitamin front is clicked
viewSelection.addEventListener('click', event => {
  event.preventDefault();
  console.log("viewSelection function running");
  if (selection) {
    scriptView.classList.toggle('showScripture');
    console.log("the scriptView class is: ", scriptView.className);
    //console.log(shortDaysArray[currentDay]);
    //scriptureMatrix[0].Evil[0].sun
    //scriptureMatrix[1].Forgiveness[0].sun
    //scriptureMatrix[1].Forgiveness[1].mon
    updateScripture()//moved code below to the updateScripture function
    

  }
  
});
//gets the scripture for the current day
function updateScripture() {
  if (selection == "Resurrection") {
    scriptView.innerHTML = "";
    console.log("scripture update function ran");
    scriptureMatrix.forEach(script => {
      //console.log(image)
      if (script[selection]) {
        console.log(script[selection]);
        script[selection].forEach(daily => {
          if (daily[resurrectionShortDaysArray[currentDay]]) {
            console.log(daily[resurrectionShortDaysArray[currentDay]]);
            dailyScript = daily[resurrectionShortDaysArray[currentDay]];
            scriptView.innerHTML = daily[resurrectionShortDaysArray[currentDay]];
          }

        })
        
      }

    });
  }
  else {
    scriptView.innerHTML = "";
    console.log("scripture update function ran");
    scriptureMatrix.forEach(script => {
      //console.log(image)
      if (script[selection]) {
        console.log(script[selection]);
        script[selection].forEach(daily => {
          if (daily[shortDaysArray[currentDay]]) {
            console.log(daily[shortDaysArray[currentDay]]);
            dailyScript = daily[shortDaysArray[currentDay]];
            scriptView.innerHTML = daily[shortDaysArray[currentDay]];
          }

        })
        
      }

    });
  }
  
}

scriptView.addEventListener('click', event => {
  event.preventDefault();
  console.log("clicked on scriptView element", dailyScript);
  viewChanger()
});

function viewChanger() {
  console.log("viewChanger function running. The scriptView.innerHTML = ", scriptView.innerHTML);
  if (scriptView.innerHTML === dailyScript) {
    dailyScript = "";
    updateQuote()
  }
  else if (scriptView.innerHTML === dailyQuote) {
    console.log("the dailyquote = ",dailyQuote)
    console.log("the scriptView.innerHTML contains: ",scriptView.innerHTML);
    updateScripture()
  }
}

function updateQuote() {
  if (selection == "Resurrection") {
    scriptView.innerHTML = "";
    console.log("quote update function ran and the innerHTML contains: ", scriptView.innerHTML);
    quoteMatrix.forEach(quote => {
      if (quote[selection]) {
        console.log("here is the quote[selection]: ", quote[selection]);
        quote[selection].forEach(dayQuote => {
          if (dayQuote[resurrectionShortDaysArray[currentDay]]) {
            console.log(dayQuote[resurrectionShortDaysArray[currentDay]]);
            dailyQuote = dayQuote[resurrectionShortDaysArray[currentDay]];
            scriptView.innerHTML = dayQuote[resurrectionShortDaysArray[currentDay]];
            console.log("the quote added: ", dayQuote[resurrectionShortDaysArray[currentDay]], "the innerHTML contains: ", scriptView.innerHTML);
          }
        })
      }
      
    });
  }
  else {
    scriptView.innerHTML = "";
    console.log("quote update function ran and the innerHTML contains: ", scriptView.innerHTML);
    quoteMatrix.forEach(quote => {
      if (quote[selection]) {
        console.log("here is the quote[selection]: ", quote[selection]);
        quote[selection].forEach(dayQuote => {
          if (dayQuote[shortDaysArray[currentDay]]) {
            console.log(dayQuote[shortDaysArray[currentDay]]);
            dailyQuote = dayQuote[shortDaysArray[currentDay]];
            scriptView.innerHTML = dayQuote[shortDaysArray[currentDay]];
            console.log("the quote added: ", dayQuote[shortDaysArray[currentDay]], "the innerHTML contains: ", scriptView.innerHTML);
          }
        })
      }
      
    });
  }
  
}

function openMenu() {
  window.open('./pages/salvation.html', "_self");
}
function openLetter() {
  saveState()
  let letterSelect = ("./assets/letters/" + selection + ".html");//open the letter of the selected series
  console.log(letterSelect);
  window.open(letterSelect, "_self");
}

function saveState() {//save current setting to storage
  sessionStorage.setItem('storedSelection', selection);
}
