setInterval(function(){
    var currentTime = new Date();
    var seconds = currentTime.getSeconds() * 6; // 360 degrees divided by 60 seconds = 6 degrees per second
    var minutes = currentTime.getMinutes() * 6; // 360 degrees divided by 60 minutes = 6 degrees per minute
    var hours = (currentTime.getHours() % 12) * 30 + (currentTime.getMinutes() / 2); // 360 degrees divided by 12 hours = 30 degrees per hour. Additionally, each minute contributes 0.5 degrees to the hour hand's position

    document.getElementById("second-hand").style.transform = "rotate(" + seconds + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minutes + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hours + "deg)";
}, 1000);
