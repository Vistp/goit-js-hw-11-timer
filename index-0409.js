// делаем класс CountdownTimer варик динамического создания таймера, сделать чтобы время в разных таймерах отображалось разное

const bodyEl = document.querySelector('body');

class CountdownTimer {
    static timersArr = [];

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
            console.log(`${days}:${hours}:${mins}:${secs}`);
            this.onTick({ days, hours, mins, secs });
        }, 1000);
        CountdownTimer.timersArr.push(this.selector);
        // console.log(CountdownTimer.timersArr);
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
const timerTwo = new CountdownTimer('timer-2', new Date('Oct 17, 2021'), updateClockface);


timerOne.start();
timerTwo.start();

// function updateClockface({ days, hours, mins, secs }) {
//     daysEl.textContent = `${ days }:`;
//     hoursEl.textContent = `${hours}:`;
//     minsEl.textContent = `${mins}:`;
//     secsEl.textContent = secs;
// }
// function updateClockface({ days, hours, mins, secs }) {
//     daysEl[i].textContent = `${ days }:`;
//     hoursEl.textContent = `${hours}:`;
//     minsEl.textContent = `${mins}:`;
//     secsEl.textContent = secs;
// }

// работает одно и то же время на двух таймерах
// function updateClockface({ days }) {
//     daysEl.forEach((day, index) => {
//         // console.log(`index ${index}, value ${day.textContent}`)
//         daysEl[index].textContent = `${ days }:`;
//     });
// }
// меняем чтобы в разных таймерах было разное время

function updateClockface({ days }) {
    CountdownTimer.timersArr.forEach((element, ind) => {
        daysEl.forEach((day, index) => {
        if (ind === index) {
            // console.log(index);
            // console.log(ind);
            console.log(ind === index);
            daysEl[index].textContent = `${ days }:`;
       }
    });
    });
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
// const timerRenderOne = createTimer.bind(timerOne); можно заменить на createTimer.bind(timerOne)() в insertAdjacentHTML
const timerRenderTwo = createTimer.bind(timerTwo);


bodyEl.insertAdjacentHTML('beforeend', createTimer.bind(timerOne)());
bodyEl.insertAdjacentHTML('beforeend', timerRenderTwo());

const daysEl = document.querySelectorAll('[data-value="days"]');
// console.log(daysEl.textContent);
const hoursEl = document.querySelector('[data-value="hours"]');
// console.log(hoursEl.textContent);
const minsEl = document.querySelector('[data-value="mins"]');
// console.log(minsEl.textContent);
const secsEl = document.querySelector('[data-value="secs"]');
// console.log(secsEl.textContent);