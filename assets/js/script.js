$("#currentDay").text(moment().format("dddd, MMMM Do, h:mm:ss a"));

$("#8am .description").val(localStorage.getItem("8am"));
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
$("#6pm .description").val(localStorage.getItem("6pm"));
$("#7pm .description").val(localStorage.getItem("7pm"));
$("#8pm .description").val(localStorage.getItem("8pm"));

var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".description").val();

    localStorage.setItem(time, schedule);
});

function theTimeis() {
    var currentTime = moment().hour();
    
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id")[i]);

        if (timeBlock < currentTime) {
            $(this).addClass("past");
        } else if (timeBlock == currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}

theTimeis();