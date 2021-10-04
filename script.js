const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');

const newYears = '1 Jan 2022';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysDisplay.innerHTML = days;
    hoursDisplay.innerHTML = hours;
    minDisplay.innerHTML = formatTime(minutes);
    secDisplay.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
