// Display the date with Luxon 
var options = {weekday: "long", month: "long", day: "numeric"};
var dt = new Date();
var displayDate= dt.toLocaleDateString("en-US", options);
$("#currentDay").append(displayDate)

var getTime = ()=> {
    //gets the current time
    var currentTime = new Date().getHours();

    //loops through time block
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);
        console.log(currentTime, timeBlock);
        console.log($(this))

        //checks if current hour is more than block hour
        if (currentTime === timeBlock) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } 
        //checks if current hour equals block hour
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

