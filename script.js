// script.js
function startClock() {
    const minutesInput = document.getElementById('minutes').value;
    const countdownElement = document.getElementById('countdown');
    const countupElement = document.getElementById('countup');

    if (minutesInput === '' || minutesInput < 0) {
        alert('Please enter a valid number of minutes.');
        return;
    }

    let totalTime = parseInt(minutesInput) * 60; // Convert minutes to seconds
    let countdownTime = totalTime;
    let countupTime = 0;

    countdownElement.innerHTML = formatTime(countdownTime);
    countupElement.innerHTML = formatTime(countupTime);

    // Start both countdown and countup timers
    let interval = setInterval(() => {
        countdownTime--;
        countupTime++;

        countdownElement.innerHTML = formatTime(countdownTime);
        countupElement.innerHTML = formatTime(countupTime);

        if (countdownTime <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    return `${mins}:${secs}`;
}
