const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');

const button = document.getElementById('btn');
const container = document.getElementById('countdown');

function countdown() {
    const newYears = document.getElementById('dateSelected').value;

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    if(totalSeconds < 0){
        alert ('Wrong date selected');
    }

    else {
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysDisplay.innerHTML = days;
        hoursDisplay.innerHTML = hours;
        minDisplay.innerHTML = formatTime(minutes);
        secDisplay.innerHTML = formatTime(seconds);

        button.style.visibility = 'hidden';
        container.style.visibility = 'visible';

        setInterval(countdown, 1000);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

