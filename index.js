const bodyEl = document.querySelector('body');

class CountdownTimer {
    constructor(selector, targetDate, onTick) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;
  }
    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`);
            this.onTick({ days, hours, mins, secs });
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

function updateClockface({ days, hours, mins, secs }) {
    daysEl.textContent = `${ days }:`;
    hoursEl.textContent = `${hours}:`;
    minsEl.textContent = `${mins}:`;
    secsEl.textContent = secs;
}

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

const timerOne = new CountdownTimer('timer-1', new Date('Sep 17, 2021'), updateClockface);
timerOne.start();

bodyEl.insertAdjacentHTML('beforeend', createTimer.bind(timerOne)());

const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minsEl = document.querySelector('[data-value="mins"]');
const secsEl = document.querySelector('[data-value="secs"]');