// Update the current time every 1 millisecond
var x = setInterval(function() {

    // Get today's date and time 
    var now = new Date();
        
    // Format the current time
    var formattedTime = now.toLocaleString("en-US", { 
        month: "long", 
        day: "numeric", 
        year: "numeric", 
        hour: "numeric", 
        minute: "numeric", 
        second: "numeric", 
        fractionalSecondDigits: 4 
    });
    
    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = formattedTime;

}, 1);
