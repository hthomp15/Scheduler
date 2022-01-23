// Display the date with Luxon 
var options = {weekday: "long", month: "long", day: "numeric"};
var dt = new Date();
var displayDate= dt.toLocaleDateString("en-US", options);
$("#currentDay").append(displayDate)



