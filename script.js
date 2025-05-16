const counterContainer = document.querySelector('.counter-container');

/**
 * This will display the max number of counters
 * We can changes this as per requirement
 */
const maxCounters = 3;

function createCounter(index) {
    const counter = document.createElement('div');
    counter.classList.add('counter');
    counterContainer.appendChild(counter);
}


