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

var onStart = ()=> {
    getTime();

    //adds click listener function to saveBtn 
    $(".saveBtn").on("click", function(){
        var text = $(this).siblings(".event").val();
        var time = $(this).parent().attr("id");
        // console.log(text, time);

        localStorage.setItem(time, text); 
           
    })

    //returns value of the localStorage item
    $("#hour-9 .event").val(localStorage.getItem("hour-9"));
    $("#hour-10 .event").val(localStorage.getItem("hour-10"));
    $("#hour-11 .event").val(localStorage.getItem("hour-11"));
    $("#hour-12 .event").val(localStorage.getItem("hour-12"));
    $("#hour-13 .event").val(localStorage.getItem("hour-13"));
    $("#hour-14 .event").val(localStorage.getItem("hour-14"));
    $("#hour-15 .event").val(localStorage.getItem("hour-15"));
    $("#hour-16 .event").val(localStorage.getItem("hour-16"));
    $("#hour-17 .event").val(localStorage.getItem("hour-17"));

}

onStart()

