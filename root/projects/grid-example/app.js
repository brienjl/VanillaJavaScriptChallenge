var countDownDate = new Date("Oct 31, 2024 00:00:01").getTime();
var counter = setInterval(function() {
    var now = new Date().getTime();
    var countdown = countDownDate - now;
    
    var days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    var hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;
    

});