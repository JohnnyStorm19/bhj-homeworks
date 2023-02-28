let secEl = document.getElementById('seconds');
let minEl = document.getElementById('minutes');
let hoursEl = document.getElementById('hours');

let intervalId;
let seconds = 20;
let minutes = 0;
let hours = 0;

function startTimer() {
    secEl.textContent = seconds;
    minEl.textContent = minutes;
    hoursEl.textContent = hours;
    seconds--;  
    if(seconds <= 0 && minutes <= 0 && hours <= 0) {
        secEl.textContent = 0;
        minEl.textContent = 0;
        hoursEl.textContent = 0;
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
        location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")
    }
    if(seconds < 0) {
        minutes--;
        seconds = 59;
    }
    if(minutes < 0) {
        hours --;
        minutes = 59;
    }
    if(hours < 0) {
        hours = 0;
    }

    if(seconds < 10) {
        secEl.textContent = '0' + seconds;
    }
    if(minutes < 10) {
        minEl.textContent = '0' + minutes + ':';
    } else {
        minEl.textContent = minutes + ':';
    }
    if(hours < 10) {
        hoursEl.textContent = '0' + hours + ':';
    } else {
        hoursEl.textContent = hours + ':';
    }

}

intervalId = setInterval(startTimer, 1000);


