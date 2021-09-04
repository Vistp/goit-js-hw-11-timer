console.log('Hello, GO IT');
// вариант до создания класса timer

const daysEl = document.querySelector('[data-value="days"]');
console.log(daysEl.textContent);
const hoursEl = document.querySelector('[data-value="hours"]');
console.log(hoursEl.textContent);
const minsEl = document.querySelector('[data-value="mins"]');
console.log(minsEl.textContent);
const secsEl = document.querySelector('[data-value="secs"]');
console.log(secsEl.textContent);

const timer = {
    start() {
        const targetDate = new Date('Sep 17, 2021');
        setInterval(() => {
            // console.log('Это начальное время', startTime);
            // console.log('каждая секудна');
            const currentTime = Date.now();
            // console.log('Это текущее время', currentTime);
            const deltaTime = targetDate - currentTime;
            // const timeComponents = getTimeComponents(deltaTime);
            // console.log(timeComponents); заменили на это ---->
            const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            console.log('Это разница между конечным и текущим временем', deltaTime);
            console.log(`${days}:${hours}:${mins}:${secs}`);
            // console.log(days,hours,mins,secs);
            daysEl.textContent = `${ days }:`;
            hoursEl.textContent = `${hours}:`;
            minsEl.textContent = `${mins}:`;
            secsEl.textContent = secs;
        }, 1000);
    },
};
    
timer.start();
function pad(value) {
    return String(value).padStart(2, '0');
  }

function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }