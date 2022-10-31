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
let travelLog = new TravelLog();
let destination = new Destination("Iceland", "Summer 2019", "Vatnajokull", "Amazing!");
travelLog.addDestination(destination);
let destination2 = new Destination("Japan", "May 2013", "Tokyo", "Kind place");
travelLog.addDestination(destination2);

// Display names of individual destinations in our TravelLog object 
for (const destination of travelLog.destinations.keys()) {
  let propertyLi = createElement("li");

  propertyLi.append(destination.location, destination.timeOfYear, destination.landmark, destination.notes);
  document.querySelector("ul").append(propertyLi);
}

// When a user clicks on a place's name, display properties of the individual destinations