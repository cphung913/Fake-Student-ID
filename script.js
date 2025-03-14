const timer = document.getElementById("timer");

// Update the current time every 1 millisecond
const x = setInterval(function() {

    // Get today's date and time 
    const now = new Date();

    //Get month
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[now.getMonth()];
        
    // Format the current time
    var formattedTime = `${month} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:0${now.getMilliseconds()}`
    
    // Output the result in an element with id="timer"
    timer.textContent = formattedTime;

}, 29);
