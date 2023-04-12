let d = new Date();
let day = d.getDay();
let prevDay = ((day - 1));
let nextDay = ((day + 1));
let imgMatrix = [
  {Evil: {img: "assets/scanned vitamins/evil.jpg"}},
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
  {Obey: {img: "assets/scanned vitamins/obey.jpg"}},
  {Prayer: {img: "assets/scanned vitamins/prayer.jpg"}},
  {Patriotic: {img: "assets/scanned vitamins/patriotic.jpg"}},
  {Reborn: {img: "assets/scanned vitamins/born again.jpg"}},
  {Promises: {img: "assets/scanned vitamins/promises.jpg"}},
  {Satan: {img: "assets/scanned vitamins/satan.jpg"}},
  {Harvest: {img: "assets/scanned vitamins/harvest.jpg"}},
  {Immanuel: {img: "assets/scanned vitamins/immanuel.jpg"}},
  {Beginnings: {img: "assets/scanned vitamins/beginnings.jpg"}},
  {Book: {img: "assets/scanned vitamins/book.jpg"}},
  {Pride: {img: "assets/scanned vitamins/pride.jpg"}},
  {Hope: {img: "assets/scanned vitamins/hope.jpg"}}];

let menuBtn = document.getElementById("menuBtn");
let infoScreen = document.getElementById("info");
let letterButton = document.getElementById("letterBtn");
let kidsLetterButton = document.getElementById("kidsLetterBtn");
let bonusBtn = document.getElementById("bonus-vitamin");
let revealBonus;
let bonusDay;

let kidsArray = [
  "Obey",
  "Prayer"];

let containsBonusDay = [];//declare an array to contain all the series names that have bonus days

//all scriptures and quotes moved to content.js file
// to access the scriptureMatrix, use: scriptureMatrix[0].Evil[0].sun
// or: scriptureMatrix[1].Forgiveness[0].sun
// or: scriptureMatrix[1].Forgiveness[1].mon   ....etc

let resurrectionDaysArray = [
  "Resurrection Sunday!",
  "Good Shepherd Monday",
  "Zion's Cornerstone Tuesday",
  "Lord's Supper Wednesday",
  "Passover Thursday",
  "Crucifixion Friday",
  "Burial Saturday",
  "Palm Sunday"];

let resurrectionDaysMatrix = [
  {0: {prev: "7", next: "1"}},
  {1: {prev: "0", next: "2"}},
  {2: {prev: "1", next: "3"}},
  {3: {prev: "2", next: "4"}},
  {4: {prev: "3", next: "5"}},
  {5: {prev: "4", next: "6"}},
  {6: {prev: "5", next: "7"}},
  {7: {prev: "6", next: "0"}}];

let resurrectionShortDaysArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "bonus"];

let bonusShortDaysArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "bonus"];

let bonusDaysMatrix = [
  {0: {prev: "7", next: "1"}},
  {1: {prev: "0", next: "2"}},
  {2: {prev: "1", next: "3"}},
  {3: {prev: "2", next: "4"}},
  {4: {prev: "3", next: "5"}},
  {5: {prev: "4", next: "6"}},
  {6: {prev: "5", next: "7"}},
  {7: {prev: "6", next: "0"}}];

let bonusDaysArray = ["Sacred Sunday",
  "Marvelous Monday",
  "Terrific Tuesday",
  "Wonderful Wednesday",
  "Thankful Thursday",
  "Fabulous Friday",
  "Satisfying Saturday",
  "Bountiful Bonus!"];

//create list of days used in the Patriotic Vitamin
let patrioticDaysArray = [
  "Sunday: Blessing",
  "Monday: Truth",
  "Tuesday: Honesty",
  "Wednesday: Justice",
  "Thursday: Taxation",
  "Friday: Obedience",
  "Saturday: Law and Order",
  "Bonus Blessing"
];

let specialDays;//this variable holds the name of the data-daysArray dataset

let daysArray = ["Sacred Sunday",
  "Marvelous Monday",
  "Terrific Tuesday",
  "Wonderful Wednesday",
  "Thankful Thursday",
  "Fabulous Friday",
  "Satisfying Saturday"];

let shortDaysArray = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

let daysMatrix = [
  {0: {prev: "6", next: "1"}},
  {1: {prev: "0", next: "2"}},
  {2: {prev: "1", next: "3"}},
  {3: {prev: "2", next: "4"}},
  {4: {prev: "3", next: "5"}},
  {5: {prev: "4", next: "6"}},
  {6: {prev: "5", next: "0"}}];

let previousDisplayedDay;//value will be the day that was displayed before the bonus was clicked
let displayedDay = document.getElementById("day-display");//this is where the day name gets displayed
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
let scriptView = document.getElementById("scripture");//this is what shows the active vitamin scripture verse
let viewInstruct = document.getElementById("show-instructions");

let dailyQuote;

let storedSelection;

let audio = document.querySelector("audio");

if (audio) {
    audio.addEventListener('click', (e) => {
    console.log('audio clicked');
  });
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//added 1/18/22   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
getState()//get the contents of localStorage if user went from vitamins to letter then back to vitamins

function getState() {//added this function to load previous series selections when returning to vitamin from letter or other screen
  previousDisplayedDay = displayedDay.innerHTML;
  findBonusDays()//check to see which series contain bonus days
  console.log("getState function running...");
  specialDays = sessionStorage.getItem('specialDays');//gets the name of specialDays dataset if in memory to set the days array if special days needed (ie: Patriotic series)
  console.log('the specialDays variable in sessionStorage is: ', specialDays);
  selection = sessionStorage.getItem('storedSelection');
  console.log('the stored selection value is: ', selection);
  if (selection == "Resurrection") {//set days to special if series in memory is resurrection
    displayedDay.innerHTML = resurrectionDaysArray[currentDay];
    console.log('displayedDay changed...');
    previousDisplayedDay = displayedDay.innerHTML;
    console.log('the displayedDay was set to ', resurrectionDaysArray[currentDay])
  }
  if (specialDays || selection == "Patriotic") {
    console.log('the vitamin selected has special days: ', specialDays);
    if (specialDays == "patrioticDaysArray");//set patriotic days when page first loads
    displayedDay.innerHTML = patrioticDaysArray[currentDay];
    console.log('displayedDay changed...');
    previousDisplayedDay = displayedDay.innerHTML;
  }
  isThereBonus()
  if (selection == null) {
    checkForKidsLetter()
    // alert("session storage is: " + sessionStorage.getItem('storedSelection'));
    viewInstruct.style.display = "block";
    letterButton.style.display = "none";
    kidsLetterButton.style.display = "none";
  }
  else {
    checkForKidsLetter()
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
  previousDisplayedDay = displayedDay.innerHTML;
  console.log("the previousDisplayedDay = ", previousDisplayedDay);
  console.log('selection = ', selection);
  if (selection == "Resurrection") {//set days to special if series in memory is resurrection
    displayedDay.innerHTML = resurrectionDaysArray[currentDay];
    console.log('displayedDay changed...');
    previousDisplayedDay = displayedDay.innerHTML;
    return//break after setting day for resurrection series
  }
  console.log('specialDays = ', specialDays);
  console.log('the vitamin selected has special days: ', specialDays);
  if (selection == "Patriotic") {//set patriotic days when page first loads
  displayedDay.innerHTML = patrioticDaysArray[currentDay];
  console.log('displayedDay changed...');
  previousDisplayedDay = displayedDay.innerHTML;
  return
  }
  else {
    displayedDay.innerHTML = daysArray[day];
    console.log('displayedDay changed...');
    console.log("on window load, the displayedDay innerHTML was set to daysArray[day]", daysArray[day]);
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

//initialize days
function dayInit() {
  d = new Date();
  day = d.getDay();
  prevDay = ((day - 1));
  nextDay = ((day + 1));
  currentDay = day
}


menuBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log("clicked on menu");
  infoScreen.style.display = "block";
});

function returnMain() {
  infoScreen.style.display = "none";
}

//handle when a vitamin series name link is clicked
jumpLinks.forEach(link => {
 link.addEventListener('click', event => {
    event.preventDefault();
    console.log("the link dataset name is: ", link.getAttribute("data-daysArray"));
    // if (link.getAttribute.dataset == "data-daysArray")
    if (link.innerHTML != "Home") {//keeps home from appearing in letter title
      // console.log("the link data-name is: ", link.getAttribute("data-name"));
      // selection = (link.innerHTML);//old way
      
      selection = link.getAttribute("data-name");
      isThereBonus()//check to see if the selected series has a bonus scripture
      checkForKidsLetter()
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
    dayInit()
    let revertDay = d.getDay();
    if (selection == "Resurrection") {//set days to special if series in memory is resurrection
      displayedDay.innerHTML = resurrectionDaysArray[revertDay];
      console.log('displayedDay changed...');
      return//must be here
    }
    if (selection == "Patriotic") {//set revert day using patriotic days array
      displayedDay.innerHTML = patrioticDaysArray[revertDay];
      console.log('displayedDay changed...');
      console.log('the patrioticDaysArray[revertDay] is: ', patrioticDaysArray[revertDay]);
      specialDays = link.getAttribute("data-daysArray");//if the link requires special days, get the dataset name
      console.log('the specialDays variable is: ', specialDays);
      sessionStorage.setItem('specialDays', specialDays);
    
    }
    else {
    displayedDay.innerHTML = daysArray[revertDay];
    console.log('displayedDay changed...');
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
  scriptView.classList.remove("bonus-style");//hide previously opened bonus vitamin when selecting a different vitamin
  scriptView.classList.add("scripture");
  console.log("seriesSelect function running");
  //viewInstruct.style.display = "none";
  // console.log("the scriptView class is: ", scriptView.className);
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
  scriptView.classList.remove("bonus-style");
  previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
  if (scriptView.classList.contains("bonus-style")) {
    scriptView.classList.toggle("bonus-style");
    scriptView.classList.toggle("scripture");
    console.log("the scriptView classname toggled to: ", scriptView.className);
  }
  else{
    console.log("the scriptView classname is: ", scriptView.className);
    if (selection == "Resurrection") {//set days to special if series in memory is resurrection
      if (day == "0") {
        day = 7;
        console.log("The day was 0");
        currentDay = 7;
        prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
        nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
        previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@///////////////////////////////////
        displayedDay.innerHTML = resurrectionDaysArray[currentDay];
        console.log('displayedDay changed...');
        updateScripture()
        return
      }
      else {
          day = day - 1;
          currentDay = currentDay - 1;
          prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
          nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
          previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
          displayedDay.innerHTML = resurrectionDaysArray[currentDay];
          console.log('displayedDay changed...');
          updateScripture()
          return  
      }
    }
    if (selection == "Patriotic") {//set days using patriotic days array
      console.log('the specialDays is ', specialDays);
      if (day == "0") {
        day = 6;
        console.log("The day was 0");
        currentDay = 6;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);
        previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
        displayedDay.innerHTML = patrioticDaysArray[currentDay];
        console.log('displayedDay changed...');
        updateScripture()
        return
      }
      else {
          day = day - 1;
          currentDay = currentDay - 1;
          prevDay = (daysMatrix[currentDay][currentDay].prev);
          nextDay = (daysMatrix[currentDay][currentDay].next);
          previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
          displayedDay.innerHTML = patrioticDaysArray[currentDay];
          console.log('displayedDay changed...');
          updateScripture()
          return
      }
    }
      
  
      else {//if the series does not have a specialDays dataset then run this
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
          previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
          displayedDay.innerHTML = daysArray[currentDay];
          console.log('displayedDay changed...');
          // prevBtn.innerHTML = shortDaysArray[prevDay];
          // nextBtn.innerHTML = shortDaysArray[nextDay];
          updateScripture()
          return
        }
        else {
            day = day - 1;
            currentDay = currentDay - 1;
            prevDay = (daysMatrix[currentDay][currentDay].prev);
            nextDay = (daysMatrix[currentDay][currentDay].next);
            previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
            displayedDay.innerHTML = daysArray[currentDay];
            console.log('displayedDay changed...');
            updateScripture()
            return
        }
      }
    }
  
}

function next() {
  scriptView.classList.remove("bonus-style");
  console.log("the scriptView classname is: ", scriptView.className);//hide previously opened bonus vitamin when selecting a different vitamin
      //console.log("the days matrix is: ", daysMatrix[day]);
  if (selection == "Resurrection") {//set days to special if series in memory is resurrection
    if (day == "7") {
      day = 0;
      console.log("The day was 6");
      currentDay = 0;
      prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
      nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
      // console.log("The current day is: ", daysArray[day]);
      // console.log("The prev day is: ", prevDay);
      // console.log("The next day is: ", nextDay);
      previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
      displayedDay.innerHTML = resurrectionDaysArray[currentDay];
      console.log('displayedDay changed...');
      updateScripture()
      return  //must be here
    }
    else {
        day = day + 1;
        currentDay = currentDay + 1;
        prevDay = (resurrectionDaysMatrix[currentDay][currentDay].prev);
        nextDay = (resurrectionDaysMatrix[currentDay][currentDay].next);
        previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
        displayedDay.innerHTML = resurrectionDaysArray[currentDay];
        console.log('displayedDay changed...');
        updateScripture()
        return //must be here
    }
  }
  if (selection == "Patriotic") {//set days using patriotic days array
        if (day == "6") {
          day = 0;
          console.log("The day was 6");
          currentDay = 0;
          prevDay = (daysMatrix[currentDay][currentDay].prev);
          nextDay = (daysMatrix[currentDay][currentDay].next);
          previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
          displayedDay.innerHTML = patrioticDaysArray[currentDay];
          console.log('displayedDay changed...');
          console.log('the day is: ', patrioticDaysArray[currentDay]);
          updateScripture()
          return  //must be here
        }
        else {
            day = day + 1;
            currentDay = currentDay + 1;
            prevDay = (daysMatrix[currentDay][currentDay].prev);
            nextDay = (daysMatrix[currentDay][currentDay].next);
            previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
            displayedDay.innerHTML = patrioticDaysArray[currentDay];
            console.log('displayedDay changed...');
            console.log('the day is: ', patrioticDaysArray[currentDay]);
            updateScripture()
            return //must be here
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
        previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
        displayedDay.innerHTML = daysArray[currentDay];
        console.log('displayedDay changed...');
        updateScripture()
        return
    }
  
    else {
      console.log('selection = ', selection)
      console.log('displayedDay changed...');
      day = day + 1;
      currentDay = currentDay + 1;
      prevDay = (daysMatrix[currentDay][currentDay].prev);
      nextDay = (daysMatrix[currentDay][currentDay].next);
      previousDisplayedDay = displayedDay.innerHTML;/////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////
      displayedDay.innerHTML = daysArray[currentDay];
      console.log('displayedDay changed...');
      updateScripture()
      return  
    }
  }
}


//this function opens the scripture when the vitamin front is clicked
viewSelection.addEventListener('click', event => {
  console.log("the scriptView class name is: ", scriptView.className);
  console.log("viewInstruct.style.display is: ", viewInstruct.style.display);
  if (viewInstruct.style.display == "none" || viewInstruct.style.display == "block") {
    console.log('scriptView innerHTML contains: ', scriptView.innerHTML)
    console.log("viewSelection function running");
    if (scriptView.classList.contains("bonus-style")) {
      console.log("the scriptView className contained 'bonus-style' so it will be removed");
      // displayedDay.innerHTML = previousDisplayedDay;
      // console.log("the displayedDay was set to 'previousDisplayedDay'");
      if (specialDays != 'null') {//if the dataset is specialDays then run this
        if (specialDays == "patrioticDaysArray") {
          console.log('this is where the problem is....')
          scriptView.classList.remove("bonus-style");
          scriptView.classList.add("scripture");
          displayedDay.innerHTML = patrioticDaysArray[day];
          scriptView.innerHTML = "";
        }
      }
      else {
        displayedDay.innerHTML = daysArray[day];
        console.log('displayedDay changed...');
        scriptView.classList.remove("bonus-style");
        scriptView.classList.add("scripture");
        console.log("the scriptView class name is: ", scriptView.className);
        scriptView.innerHTML = "";
        updateScripture()
        return
      }
      
    }
    else{
      console.log("the scriptView class name did not contain bonus-style, rather: ", scriptView.className);
      if (selection == "Resurrection") {
        console.log('this is where the days were getting set wrong');
        console.log('day = ', day)
        displayedDay.innerHTML = resurrectionDaysArray[day];
        console.log('displayedDay changed...');
        scriptView.classList.toggle('showScripture');
        updateScripture()
        return
      }
      if (specialDays != 'null') {//if the dataset is specialDays then run this
        if (specialDays == "patrioticDaysArray") {
          console.log('this is where the patrioticDaysArray is....')
          scriptView.classList.toggle('showScripture');
          updateScripture()
          return
        }
      }
      else {
        displayedDay.innerHTML = daysArray[day];
        console.log('displayedDay changed...');
      }
    }
    console.log("the scriptView class name is: ", scriptView.className);
    scriptView.classList.toggle('showScripture');
    scriptView.classList.remove("bonus-style");
    if (selection == 'Patriotic') {
      displayedDay.innerHTML = patrioticDaysArray[day];
    }
    else {
      displayedDay.innerHTML = daysArray[day];
    }
    console.log("the scriptView class name is: ", scriptView.className);
    updateScripture()//moved code below to the updateScripture function
  }
});
  

function updateBonusScripture() {
  console.log("update bonus scripture function ran");
  scriptView.innerHTML = "";
  scriptureMatrix.forEach(script => {
    bonusDay = 7;
    if (script[selection]) {
      console.log(script[selection]);
      script[selection].forEach(daily => {
        // console.log(daily)
        // console.log(bonusDay)
        if (daily[bonusShortDaysArray[bonusDay]]) {
          console.log(daily[bonusShortDaysArray[bonusDay]]);
          dailyScript = daily[bonusShortDaysArray[bonusDay]];
          scriptView.innerHTML = daily[bonusShortDaysArray[bonusDay]];
        }
      }); 
    }
  });
}

//gets the scripture for the current day
function updateScripture() {
  console.log('update scripture function running...');
  if (selection == "Resurrection") {
    scriptView.innerHTML = "";
    // console.log("scripture update function ran");
    scriptureMatrix.forEach(script => {
      //console.log(image)
      if (script[selection]) {
        // console.log(script[selection]);
        script[selection].forEach(daily => {
          if (daily[resurrectionShortDaysArray[currentDay]]) {
            // console.log(daily[resurrectionShortDaysArray[currentDay]]);
            dailyScript = daily[resurrectionShortDaysArray[currentDay]];
            scriptView.innerHTML = daily[resurrectionShortDaysArray[currentDay]];
          }

        })
        
      }

    });
  }
  else {
    scriptView.innerHTML = "";
    // console.log("scripture update function ran");
    scriptureMatrix.forEach(script => {
      //console.log(image)
      if (script[selection]) {
        // console.log(script[selection]);
        script[selection].forEach(daily => {
          if (daily[shortDaysArray[currentDay]]) {
            // console.log(daily[shortDaysArray[currentDay]]);
            dailyScript = daily[shortDaysArray[currentDay]];
            scriptView.innerHTML = daily[shortDaysArray[currentDay]];
          }

        })
        
      }

    });
  }
  
}

scriptView.addEventListener('click', event => {//when the opened vitamin is clicked, then change to quote and then back to scripture
  console.log('the vitamin was clicked')
  console.log('selection is: ', selection)
  console.log('specialDays = ', specialDays)
  console.log('previousDisplayedDay = ', previousDisplayedDay)
  // console.log("the scriptView classname is: ", scriptView.className);
  // console.log("the previousDisplayedDay = ", previousDisplayedDay);
  // if (scriptView.className == "bonus-style") {
  if (scriptView.classList.contains("bonus-style")) {
    // console.log("the scriptView classname is: ", scriptView.className);
    viewChanger()
  }
  else{
    console.log('selection = ', selection)
    if (selection == "Resurrection") {
      console.log("resurrection has been selected");
      viewChanger()
      return 
    }
    if (specialDays != 'null') {//if the dataset is specialDays then run this
      if (specialDays == "patrioticDaysArray") {
        console.log('this is where the patrioticDaysArray is....')
        viewChanger()
        return
      }
    }
    if (previousDisplayedDay == "Bountiful Bonus!") {
    displayedDay.innerHTML = daysArray[day];
    console.log('displayedDay changed...');
    event.preventDefault();
    console.log("clicked on scriptView element", dailyScript);
    viewChanger()
    }
    else {
      console.log("previousDisplayedDay was undefined");
      displayedDay.innerHTML = daysArray[day];///////////////////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//////////////////////////////////////////////
      console.log('displayedDay changed...');
      viewChanger()
    }
  }
  
  
});

function viewChanger() {
  console.log("viewChanger function running. The scriptView.innerHTML = ", scriptView.innerHTML);
  console.log("the scriptView classname is: ", scriptView.className)
  if (scriptView.classList.contains("bonus-style")) {
    // console.log("the scriptView classname contains bonus-style: ", scriptView.className);
    // console.log("the dailyScript = ", dailyScript);
    if (scriptView.innerHTML === dailyScript) {
      dailyScript = "";
      updateBonusQuote()
      }
    else if (scriptView.innerHTML === dailyQuote  || scriptView.innerHTML.includes('tooltiptext')) {
      // console.log("the dailyquote = ",dailyQuote)
      // console.log("the scriptView.innerHTML contains: ",scriptView.innerHTML);
      updateBonusScripture()
    }
  }
  else {
    console.log('the scriptView.innerHTML = ', scriptView.innerHTML)
    if (scriptView.innerHTML === dailyScript) {
    dailyScript = "";
    updateQuote()
    }
    else if (scriptView.innerHTML === dailyQuote || scriptView.innerHTML.includes('tooltiptext')) {
      // console.log("the dailyquote = ",dailyQuote)
      // console.log("the scriptView.innerHTML contains: ",scriptView.innerHTML);
      updateScripture()
    }
  }
}

function updateBonusQuote() {
  // console.log("bonus quote update function ran and the innerHTML contains: ", scriptView.innerHTML);
  scriptView.innerHTML = "";
  bonusDay = 7;
  quoteMatrix.forEach(quote => {
    if (quote[selection]) {
      // console.log("here is the quote[selection]: ", quote[selection]);
      quote[selection].forEach(dayQuote => {
        if (dayQuote[bonusShortDaysArray[bonusDay]]) {
          // console.log(dayQuote[bonusShortDaysArray[bonusDay]]);
          dailyQuote = dayQuote[bonusShortDaysArray[bonusDay]];
          scriptView.innerHTML = dayQuote[bonusShortDaysArray[bonusDay]];
          // console.log("the quote added: ", dayQuote[bonusShortDaysArray[bonusDay]], "the innerHTML contains: ", scriptView.innerHTML);
        }
        //show the lyrics if tooltiptext is in the element
        if (scriptView.innerHTML.includes('tooltiptext')) {
          console.log('tooltiptext style is: ', document.querySelector('.tooltiptext').style)
          if (document.querySelector('.tooltiptext').style.visibility != "visible"){
            console.log('the tooltiptext was hidden')
            document.querySelector('.tooltiptext').style.visibility = "visible";
          }
          else if (document.querySelector('.tooltiptext').style.visibility == "visible"){
            document.querySelector('.tooltiptext').style.visibility = "hidden";
          }
        }
      })
    }
    
  });
  // scriptView.innerHTML = dailyQuote[bonusShortDaysArray[bonusDay]];
}

function updateQuote() {
  if (selection == "Resurrection") {
    scriptView.innerHTML = "";
    // console.log("quote update function ran and the innerHTML contains: ", scriptView.innerHTML);
    quoteMatrix.some(quote => {
      if (quote[selection]) {
        console.log("here is the quote[selection]: ", quote[selection]);
        quote[selection].some(dayQuote => {
          if (dayQuote[resurrectionShortDaysArray[currentDay]]) {
            console.log(dayQuote[resurrectionShortDaysArray[currentDay]]);
            dailyQuote = dayQuote[resurrectionShortDaysArray[currentDay]];
            scriptView.innerHTML = dayQuote[resurrectionShortDaysArray[currentDay]];
            console.log("the quote added: ", dayQuote[resurrectionShortDaysArray[currentDay]], "the innerHTML contains: ", scriptView.innerHTML);
          }
          return
        })
      }
      return
    });
  }
  else {
    scriptView.innerHTML = "";
    // console.log("quote update function ran and the innerHTML contains: ", scriptView.innerHTML);
    quoteMatrix.forEach(quote => {
      if (quote[selection]) {
        // console.log("here is the quote[selection]: ", quote[selection]);
        quote[selection].forEach(dayQuote => {
          if (dayQuote[shortDaysArray[currentDay]]) {
            console.log(dayQuote[shortDaysArray[currentDay]]);
            dailyQuote = dayQuote[shortDaysArray[currentDay]];
            scriptView.innerHTML = dayQuote[shortDaysArray[currentDay]];
            console.log("the quote added: ", dayQuote[shortDaysArray[currentDay]], "the innerHTML contains: ", scriptView.innerHTML);
            //show the lyrics if tooltiptext is in the element
            if (dailyQuote.includes('tooltiptext')) {
              console.log('tooltiptext style is: ', document.querySelector('.tooltiptext').style)
              if (document.querySelector('.tooltiptext').style.visibility != "visible"){
                console.log('the tooltiptext was hidden')
                document.querySelector('.tooltiptext').style.visibility = "visible";
              }
              else if (document.querySelector('.tooltiptext').style.visibility == "visible"){
                document.querySelector('.tooltiptext').style.visibility = "hidden";
              }
            }
          }
        })
      }
      
    });
  }
  return
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

function checkForKidsLetter() {
  // alert("just checked for kids letter");
  // console.log("just checked for kids letter");
  let kidsLetterSelect = ("./assets/letters/kids" + selection + ".html");
  kidsArray.some(file => {
    // console.log("here is the selection: ", selection);
    console.log("here are the kids letters files: ", file);
    if(file !== selection) {
      letterButton.style.left = "400px";
      kidsLetterButton.style.display = "none";
    }
    else {
      console.log("file == selection");
      letterButton.style.left = "480px";
      kidsLetterButton.style.display = "block";
      return file;
    }
    
  });
  
}

function openKidsLetter() {
  saveState()
  checkForKidsLetter()
  let kidsLetterSelect = ("./assets/letters/kids" + selection + ".html");//open the kids letter of the selected series
  console.log(kidsLetterSelect);
  window.open(kidsLetterSelect, "_self");
}

function saveState() {//save current setting to storage
  sessionStorage.setItem('storedSelection', selection);
}

function findBonusDays() {//function to find if vitamin series has a bonus day
  console.log("findBonusDays function running...")
  
  const allSeries = scriptureMatrix.map(function(element, index, array){
    //console.log(element); 
    // console.log(index);
    // console.log(array[index]);
    let seriesNames = Object.keys(element);//gets the key name (name of vitamin series)
    let text = seriesNames.toString();//convert array to string
    //console.log("the series names are: ", text);
    //console.log(element[text].length)//this is getting the length of the array (how many days)
    if (element[text].length == 8) {
      // console.log("the vitamins with bonus days are: ", text);
      containsBonusDay.push(text);//if the series has 8 days, then add the name to the array
    }
  });
  // console.log(containsBonusDay)//log the array containing all the names of vitamins with bonus days
  // console.log("vitamins with bonus days are: ");
  containsBonusDay.map(function(eachName){
    // console.log(eachName);
  });
  
}

function isThereBonus() {
  console.log("the isThereBonus function is running...");
  // console.log("vitamins with bonus days are: ");
  // containsBonusDay.map(function(eachName){
  containsBonusDay.some((eachName) => {//changed from map to some to be able to break out of loop when a match is found
    // console.log(eachName);

    if (eachName == selection) {
      if (eachName == "Resurrection") {
        console.log(selection, " is selected");
        revealBonus = false;
        bonusBtn.classList.remove("reveal");
      }
      else {
        // console.log(`${eachName} matches ${selection}`);
        revealBonus = true;
        console.log("revealBonus = ", revealBonus);
        return true
      }
    }
    else {
      revealBonus = false;
      // console.log("revealBonus = ", revealBonus);
      bonusBtn.classList.remove("reveal");
    }
    
  });

  if (revealBonus == true) {
    console.log("revealBonus = ", revealBonus);
    bonusBtn.classList.add("reveal");
  }
  // else {
  //   revealBonus = false;
  //   bonusBtn.classList.remove("reveal");
  // }
  console.log("isThereBonus function finished running.");
}

function openBonus() {//should run when bonus button is clicked
  console.log("the scriptView classname is: ", scriptView.className);
  console.log("the displayedDay innerHTML = ", displayedDay.innerHTML);
  previousDisplayedDay = displayedDay.innerHTML;
  console.log("the previousDisplayedDay = ", previousDisplayedDay);
  let isBonus = scriptView.classList.contains("bonus-style");
  console.log("isBonus variable = ", isBonus);
  scriptView.setAttribute("class", isBonus ? "scripture" : "scripture showScripture bonus-style");
  console.log("the scriptView classname is: ", scriptView.className);
  // scriptView.classList.toggle("bonus-style");
  scriptureMatrix.forEach(script => {
    bonusDay = 7;
    if (script[selection]) {
      console.log(script[selection]);
      script[selection].forEach(daily => {
        // console.log(daily)
        // console.log(bonusDay)
        if (daily[bonusShortDaysArray[bonusDay]]) {
          console.log(daily[bonusShortDaysArray[bonusDay]]);
          dailyScript = daily[bonusShortDaysArray[bonusDay]];
          scriptView.innerHTML = daily[bonusShortDaysArray[bonusDay]];
        }
      }); 
    }
  });
  if (scriptView.classList.contains("bonus-style")) {
    if (specialDays) {//if the dataset is specialDays then run this
      if (specialDays == "patrioticDaysArray") {//set days using patriotic days array
        console.log('the patrioticDaysArray[bonusDay] is ', patrioticDaysArray[bonusDay]);
        displayedDay.innerHTML = patrioticDaysArray[bonusDay];
        console.log('displayedDay changed due to bonus button clicked and patriotic day vitamin selected')
        return
      }
    }
    else {//for all other bonus days run this when bonus button is clicked
      displayedDay.innerHTML = bonusDaysArray[bonusDay];
      console.log('displayedDay changed...');
      console.log("the displayedDay innerHTML = ", displayedDay.innerHTML);
      console.log("the previousDisplayedDay = ", previousDisplayedDay);
    }
  }
  else {
    if (specialDays == "patrioticDaysArray") {//set days using patriotic days array
      console.log('the patrioticDaysArray[bonusDay] is ', patrioticDaysArray[bonusDay]);
      displayedDay.innerHTML = patrioticDaysArray[currentDay];
      previousDisplayedDay = displayedDay.innerHTML;
      return
    }
    else{
      displayedDay.innerHTML = daysArray[day];
      console.log('displayedDay changed...');
      
    }
      displayedDay.innerHTML = daysArray[day];
      console.log('displayedDay changed...');
  }
  
}
