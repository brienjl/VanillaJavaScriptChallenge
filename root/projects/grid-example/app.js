// Construct countdown date based on the current year
const currentYear = new Date().getFullYear();
let countDownDate = new Date(`Oct 31, ${currentYear} 00:00:01`).getTime();

let counter = setInterval(function() {
    // Get the current time
    const now = new Date().getTime();

    // If now is greater than countDownDate, increment the year and update countdown date
    if (now > countDownDate) {
        countDownDate = new Date(`Oct 31, ${currentYear + 1} 00:00:01`).getTime();
    } 

    // Calculate the difference between the countdown date and now
    let countdown = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    // Render the countdown in the HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;

}, 1000); // Update every second