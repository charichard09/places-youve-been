// Business Logic

// constructor function for overall travel log
function TravelLog () {
  this.destinations = {};
  this.currentId = 0;
}

TravelLog.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// constructor function for destination
function Destination(location, timeOfYear, landmark, notes) {
  this.location = location;
  this.timeOfYear = timeOfYear;
  this.landmark = landmark;
  this.notes = notes;
}

// UI Logic
function doThisOnLoad() {
  let travelLog = new TravelLog();
  let destination = new Destination("Iceland", "Summer 2019", "Vatnajokull", "Amazing!");
  travelLog.addDestination(destination);
  let destination2 = new Destination("Japan", "May 2013", "Tokyo", "Kind place");
  travelLog.addDestination(destination2);

  // let li = document.getElementById("li-id");
  // li.innerText = travelLog.destinations["1"].location;


  //First Trial:
  // Display names of individual destinations in our TravelLog object 
  // destination === [["location", "Japan"], ["timeOfYear", "May 2013"]...]
  Object.keys(travelLog.destinations).forEach( function (destination) {
    let locationLi = document.createElement("li");
    let descriptionLi = document.createElement("li");
  
    locationLi.append(travelLog.destinations[destination].location);
    locationLi.setAttribute("id", "location-li");
    descriptionLi.append(travelLog.destinations[destination].timeOfYear, 
    travelLog.destinations[destination].landmark, travelLog.destinations[destination].notes);
    document.getElementById("append").append(locationLi);
    document.getElementById("append").append(descriptionLi);
  });
}

// // When a user clicks on a place's name, display properties of the individual destinations

window.addEventListener("load", function() {
  doThisOnLoad();
});