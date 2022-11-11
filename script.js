const counterText = document.querySelector('[data-counter]');
const decrementBtn = document.querySelector('[data-decrement-btn]');
const incrementBtn = document.querySelector('[data-increment-btn]');
const resetBtn = document.querySelector('[data-reset-btn]');

class Counter {

    constructor(counterText) {
        this.counterText = counterText;
        this.counterNumber = 0;
        this.updateDisplay();
    }

    reset() {
        this.counterNumber = 0;
    }

    increment() {
        this.counterNumber++;
    }

    decrement() {
        this.counterNumber--;
    }

    updateDisplay() {

        const positive = this.counterNumber > 0;
        const negative = this.counterNumber < 0;

        if (positive) {
            this.counterText.classList.add('positive');
        } else if (negative) {
            this.counterText.classList.add('negative');
        } else {
            this.counterText.classList.remove('positive');
            this.counterText.classList.remove('negative');
        }

        this.counterText.innerText = this.counterNumber;
    }
}

const counter = new Counter(counterText);

resetBtn.addEventListener("click", () => {
    counter.reset();
    counter.updateDisplay();
})  

incrementBtn.addEventListener("click", () => {
    counter.increment();
    counter.updateDisplay();
})

decrementBtn.addEventListener("click", () => {
    counter.decrement();
    counter.updateDisplay();
})