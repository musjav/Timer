var hours = 0;
var mins = 0;
var seconds = 0;
var milliseconds = 10;

// var hoursDisp = document.getElementById("hoursDisp");
// var minsDisp = document.getElementById("minsDisp");
// var secondsDisp = document.getElementById("secondsDisp");
// var millisecondsDisp = document.getElementById("millisecondsDisp");

var hoursInput = document.getElementById("hoursInput");
var minsInput = document.getElementById("minsInput");
var secondsInput = document.getElementById("secondsInput");

function renderTimer() {
    hoursDisp.innerHTML = hours;
    minsDisp.innerHTML = mins;
    secondsDisp.innerHTML = seconds;
    millisecondsDisp.innerHTML = milliseconds;
}

var interval;

function startTimer() {
    
    hours = hoursInput.value || 0;
    mins = minsInput.value || 0;
    seconds = secondsInput.value || 0;

    if (hours < 0 || mins < 0 || seconds < 0) {
        alert('Please enter non-negative values for hours, minutes, and seconds.');
        return;
    }

    renderTimer();

    interval = setInterval(function () {
        milliseconds--;

        if (milliseconds === 0) {
            milliseconds = 10;
            seconds--;

            if (seconds < 0) {
                seconds = 59;
                mins--;

                if (mins < 0) {
                    mins = 59;
                    hours--;

                    if (hours < 0) {
                        stopTimer();
                        return;
                    }
                }
            }
        }

        renderTimer();
    }, 100);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    hours = 0;
    mins = 0;
    seconds = 0;
    milliseconds = 10;
    renderTimer();
}
