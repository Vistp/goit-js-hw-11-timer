// делаем класс CountdownTimer варик 2

// const daysEl = document.querySelector('[data-value="days"]');
// // console.log(daysEl.textContent);
// const hoursEl = document.querySelector('[data-value="hours"]');
// // console.log(hoursEl.textContent);
// const minsEl = document.querySelector('[data-value="mins"]');
// // console.log(minsEl.textContent);
// const secsEl = document.querySelector('[data-value="secs"]');
// // console.log(secsEl.textContent);
const bodyEl = document.querySelector('body');
// console.log(bodyEl);

class CountdownTimer {
    constructor(selector, targetDate, onTick) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;
    
  }
    start() {
        // const targetDate = new Date('Sep 17, 2021');
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            // console.log(deltaTime);
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            // console.log('Это разница между конечным и текущим временем', deltaTime);
            console.log(`${days}:${hours}:${mins}:${secs}`);
            // console.log(days,hours,mins,secs);
            this.onTick({ days, hours, mins, secs });
            // daysEl.textContent = `${ days }:`;
            // hoursEl.textContent = `${hours}:`;
            // minsEl.textContent = `${mins}:`;
            // secsEl.textContent = secs;
        }, 1000);
    }
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
};




  
const timerOne = new CountdownTimer('timer-1', new Date('Sep 17, 2021'), updateClockface);
// CountdownTimer.start();
// console.log(timerOne);

function updateClockface({ days, hours, mins, secs }) {
    daysEl.textContent = `${ days }:`;
    hoursEl.textContent = `${hours}:`;
    minsEl.textContent = `${mins}:`;
    secsEl.textContent = secs;
}

timerOne.start();

const timerTwo = new CountdownTimer('timer-2', new Date('Oct 17, 2021'), updateClockface);
// CountdownTimer.start();
console.log(timerTwo);

timerTwo.start();

function createTimer(timerName) {
    return `
    <div class="timer" id="${this.selector}">
        <div class="field">
            <span class="value" data-value="days">11</span>
            <span class="label">Days</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="hours">11</span>
            <span class="label">Hours</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="mins">11</span>
            <span class="label">Minutes</span>
        </div>
    
        <div class="field">
            <span class="value" data-value="secs">11</span>
            <span class="label">Seconds</span>
        </div>
    </div>
    `
}
const timerRenderOne = createTimer.bind(timerOne);
const timerRenderTwo = createTimer.bind(timerTwo);



bodyEl.insertAdjacentHTML('beforeend', timerRenderOne());
bodyEl.insertAdjacentHTML('beforeend', timerRenderTwo());

const daysEl = document.querySelector('[data-value="days"]');
// console.log(daysEl.textContent);
const hoursEl = document.querySelector('[data-value="hours"]');
// console.log(hoursEl.textContent);
const minsEl = document.querySelector('[data-value="mins"]');
// console.log(minsEl.textContent);
const secsEl = document.querySelector('[data-value="secs"]');
// console.log(secsEl.textContent);
