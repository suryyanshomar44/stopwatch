var seconds = document.getElementById("seconds");
var minutes = document.getElementById("minutes");
var button = document.getElementById("start");
var restart = document.getElementById("restart");
var hours = document.getElementById("hours");
var lap = document.getElementById("lap");
var container = document.getElementById("container");

button.innerHTML = "start";
restart.innerHTML = "reset";
var time = 0;
var timerid = false;
var isTimerOn = false;
var isLapOn = false;

button.addEventListener("click", function() {
    if(isTimerOn) {
        clearInterval(timerid);
        button.innerHTML = "start";
        isTimerOn = false;
        restart.innerHTML = "reset"
        isLapOn = false;
    }
    else {
        timerid =  setInterval(function(){
            time++;
            seconds.innerHTML = time%60;
            minutes.innerHTML = parseInt(time/60);
            hours.innerHTML = parseInt(time/(60*60))
        }, 1000);
        button.innerHTML = "stop";
        isTimerOn = true;
        restart.innerHTML = "lap";
        isLapOn = true;
    }
})
restart.addEventListener("click", function() {
    if(isLapOn) {
        var lp = document.createElement("li");
        var t = hours.innerHTML + " : " + minutes.innerHTML + " : " + seconds.innerHTML;
        lp.innerHTML = t;
        lap.appendChild(lp);
        container.appendChild(lap);
    }
    else {
        lap.innerHTML = ""
        time = 0;
        seconds.innerHTML = "0";
        minutes.innerHTML = "0";
        clearInterval(timerid);
        button.innerHTML = "start";
        isTimerOn = false;
    }
    

})


