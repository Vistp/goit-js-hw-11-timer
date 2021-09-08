class CountdownTimer {
    constructor(selector, targetDate) {
        this.selector = selector;
        this.targetDate = targetDate;
  }
    start() {
        setInterval(() => {
            const id = this.selector;
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`, this.selector);
            this.updateClockface({ days, hours, mins, secs });
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
    updateClockface({ days, hours, mins, secs }) {
        const idEl = document.getElementById(this.selector);
        const daysEl = idEl.querySelector('[data-value="days"]');
        const hoursEl = idEl.querySelector('[data-value="hours"]');
        const minsEl = idEl.querySelector('[data-value="mins"]');
        const secsEl = idEl.querySelector('[data-value="secs"]');
    daysEl.textContent = `${ days }:`;
    hoursEl.textContent = `${hours}:`;
    minsEl.textContent = `${mins}:`;
    secsEl.textContent = secs;
}
};

const timerOne = new CountdownTimer('timer-1', new Date('Sep 17, 2021'));
timerOne.start();

const timerTwo = new CountdownTimer('timer-2', new Date('Oct 17, 2021'));
timerTwo.start();
