let d = new Date();
let day = d.getDay();
let prevDay = ((day - 1));
let nextDay = ((day + 1));
let daysArray = ["Sacred Sunday", "Marvelous Monday", "Terrific Tuesday", "Wonderful Wednesday", "Thankful Thursday", "Fabulous Friday", "Satisfying Saturday"];
let shortDaysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let daysMatrix = [{0: {prev: "6", next: "1"}}, {1: {prev: "0", next: "2"}}, {2: {prev: "1", next: "3"}}, {3: {prev: "2", next: "4"}}, {4: {prev: "3", next: "5"}}, {5: {prev: "4", next: "6"}}, {6: {prev: "5", next: "0"}}];
let displayedDay = document.getElementById("day-display");
let displayedPrevDay = shortDaysArray[prevDay];
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let currentDay = day;
displayedDay.innerHTML = "";
const series = document.getElementsByTagName("dropdown-content a")
const jumpLinks = document.querySelectorAll("a[href^='#']");
let selection;
let viewSelection = document.getElementById("show-selection");
viewSelection.innerHTML = "";
prevBtn.innerHTML = "";
nextBtn.innerHTML = "";


window.onload = function() {
    displayedDay.innerHTML = daysArray[day];
    if (day == "0") {
        prevDay = "6";
        console.log(prevDay);
    }
    if (day == "6") {
        nextDay = "0";
    }
    prevBtn.innerHTML += shortDaysArray[prevDay];
    nextBtn.innerHTML += shortDaysArray[nextDay];

}

jumpLinks.forEach(link => {
 link.addEventListener('click', event => {
    event.preventDefault();
    selection = (link.innerHTML);
    viewSelection.innerHTML = "";
    viewSelection.innerHTML += selection;

    //console.log("the show-selection inner html contains: " + viewSelection);
    // Do something else instead, like handle the navigation behavior yourself
  });
});




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function seriesSelect() {
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
        prevBtn.innerHTML = shortDaysArray[prevDay];
        nextBtn.innerHTML = shortDaysArray[nextDay];

    }
    // if (day == "6") {
    //     nextDay = "7";
    //     currentDay = "7";
    //     prevDay = "5";
    // }
    else {
        day = day - 1;
        
        currentDay = currentDay - 1;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);

        console.log("The current day is: ", daysArray[currentDay]);
        console.log("The prev day is: ", shortDaysArray[prevDay]);
        console.log("The next day is: ", shortDaysArray[nextDay]);

        displayedDay.innerHTML = daysArray[currentDay];
        prevBtn.innerHTML = "";
        nextBtn.innerHTML = "";
        prevBtn.innerHTML += shortDaysArray[prevDay];
        nextBtn.innerHTML += shortDaysArray[nextDay];
        // prevBtn.innerHTML = shortDaysArray[prevDay - 1];
        // nextBtn.innerHTML = shortDaysArray[nextDay + 1];
    }
  }

  function next() {
        //console.log("the days matrix is: ", daysMatrix[day]);
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
        prevBtn.innerHTML = shortDaysArray[prevDay];
        nextBtn.innerHTML = shortDaysArray[nextDay];

    }
    // if (day == "6") {
    //     nextDay = "7";
    //     currentDay = "7";
    //     prevDay = "5";
    // }
    else {
        day = day + 1;
        
        currentDay = currentDay + 1;
        prevDay = (daysMatrix[currentDay][currentDay].prev);
        nextDay = (daysMatrix[currentDay][currentDay].next);

        console.log("The current day is: ", daysArray[currentDay]);
        console.log("The prev day is: ", shortDaysArray[prevDay]);
        console.log("The next day is: ", shortDaysArray[nextDay]);
        
        displayedDay.innerHTML = daysArray[currentDay];
        prevBtn.innerHTML = "";
        nextBtn.innerHTML = "";
        prevBtn.innerHTML += shortDaysArray[prevDay];
        nextBtn.innerHTML += shortDaysArray[nextDay];
        // prevBtn.innerHTML = shortDaysArray[prevDay - 1];
        // nextBtn.innerHTML = shortDaysArray[nextDay + 1];
    }
}