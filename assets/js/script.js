// Display the date with Luxon 
var options = {weekday: "long", month: "long", day: "numeric"};
var dt = new Date();
var displayDate= dt.toLocaleDateString("en-US", options);
// Displays my date as specified in the header
$("#currentDay").append(displayDate)

var getTime = ()=> {
    //gets the current time
    var currentTime = new Date().getHours();

    //loops through time block
    $(".time-block").each(function() {

        // This gets the value of my timeblock 
        var timeBlock = parseInt($(this).attr("id"));
        // console.log(currentTime, timeBlock);
        // console.log($(this))

        // checks if current hour equals block hour
        // if true add the class and remove other classes
        if (currentTime === timeBlock) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } 
        //checks if current hour is less than the block hour
        else if (currentTime < timeBlock) {
            $(this).addClass("future");
            $(this).removeClass("past present")
        }
        else {
            $(this).addClass("past");
            $(this).removeClass("present future");
        }
    })

}

var onStart = ()=> {
    getTime();

    //adds click listener function to saveBtn 
    $(".saveBtn").on("click", function(){
        // Find value of the textbox
        var text = $(this).siblings(".event").val();
        // Find the time at the row 
        var time = $(this).parent().attr("id");
        // console.log(text, time);
        // Send time and textbox input to local storage
        localStorage.setItem(time, text); 
           
    })

    //returns value of the localStorage item
    $("#9 .event").val(localStorage.getItem("9"));
    $("#10 .event").val(localStorage.getItem("10"));
    $("#11 .event").val(localStorage.getItem("11"));
    $("#12 .event").val(localStorage.getItem("12"));
    $("#13 .event").val(localStorage.getItem("13"));
    $("#14 .event").val(localStorage.getItem("14"));
    $("#15 .event").val(localStorage.getItem("15"));
    $("#16 .event").val(localStorage.getItem("16"));
    $("#17 .event").val(localStorage.getItem("17"));

}

onStart()

