const counterContainer = document.querySelector('.counter-container');

/**
 * This will display the max number of counters
 * We can changes this as per requirement
 */
const maxCounters = 3;

class CounterBuilder {
    getCounter() {
       const counter = document.createElement('div');
       counter.classList.add('counter');
    }

    getCounterHeaderContainer() {
        const counterHeader = document.createElement('div');
        counterHeader.classList.add('counter-header-container');
        counterHeader.appendChild(this.getCounterHeader());
        return counterHeader;
    }

    getCounterHeader() {
        const counterHeader = document.createElement('div');
        counterHeader.classList.add('counter-header');
        counterContainer.setAttribute();
        return counterHeader;
    }
    
    
}

class Counter {
    constructor(index) {
        this.index = index;
        this.counter = document.createElement('div');
        this.counter.classList.add('counter');
        counterContainer.appendChild(this.counter);
    }

    addItem(item) {
        this.counter.appendChild(item);
    }
    
}


