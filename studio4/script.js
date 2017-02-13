// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    //tips
    var hearts = document.getElementById('hearts');
    var heartshover = document.getElementById('heartshover');
    var happy = document.getElementById('happy');
    var happyhover = document.getElementById('happyhover');
    var msg = document.getElementById('msg');
    var msghover = document.getElementById('msghover');

    var tipTimer;



    // Set the date we're counting down to
    var countDownDate = new Date("Feb 14, 2018 0:0:0").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
//TIPS
    hearts.addEventListener('mouseover', function() {
        console.log('mouseover on hearts');
        tipTimer = setTimeout(showheartshover, 1500);
    });

    hearts.addEventListener('mouseout', function() {
        console.log('mouseout on hearts');
        clearTimeout(tipTimer);
        heartshover.style.opacity = 0;
    });

    function showheartshover() {
        console.log('showing msg');
        heartshover.style.opacity = 1;
        heartshover.style.transition = 'all .5s';
    }

    // bind click eventListeners to "sleep" and "design" to
    // call a timer that will delay the fading up of the tool tips
    happy.addEventListener('mouseover', function() {
        console.log('mouseover on happy');
        tipTimer = setTimeout(showhappyhover, 1000);
    });

    happyhover.addEventListener('mouseout', function() {
        console.log('mouseout on happy');
        clearTimeout(tipTimer);
        happyhover.style.opacity = 0;
    });

    function showhappyhover() {
        console.log('showing msg');
        happyhover.style.opacity = 1;
        happyhover.style.transition = 'all .5s';
    }

    msg.addEventListener('mouseover', function() {
        console.log('mouseover on msg');
        tipTimer = setTimeout(showmsghover, 1000);
    });

    msg.addEventListener('mouseout', function() {
        console.log('mouseout on msg');
        clearTimeout(tipTimer);
        msghover.style.opacity = 0;
    });

    function showmsghover() {
        console.log('showing msg');
        msghover.style.opacity = 1;
        msghover.style.transition = 'all .5s';
    }


});
