const counterContainer = document.querySelector('#counter-container');

/**
 * This will display the max number of counters
 * We can changes this as per requirement
 */
const maxCounters = 3;

function getMaterialIcon(name) {
    const materialIcon = document.createElement('span');
    materialIcon.classList.add('material-symbols-outlined');
    materialIcon.textContent = name;
    return materialIcon;
}

function getCounterItem(count) {
    const item = document.createElement('div');
    item.classList.add('item');
    const itemCount = document.createElement('div');
    itemCount.classList.add('item-count');
    itemCount.appendChild(getMaterialIcon('shopping_cart'));
    itemCount.appendChild(document.createTextNode(`${count} items`));
    item.appendChild(itemCount);
    const removeItem = document.createElement('button');
    // removeItem.onclick = event => event.target.remove();
    item.appendChild(removeItem);
    return item;
}

class CounterBuilder {
    constructor(index) {
        this.index = index;
    }

    getCounter() {
        const counter = document.createElement('div');
        counter.setAttribute('data-counter-index', this.index);
        counter.classList.add('counter');
        counter.appendChild(this.getCounterHeaderContainer());
        counter.appendChild(this.getItemContainer());
        return counter;
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
        counterHeader.textContent = `Counter ${this.index}`;
        return counterHeader;
    }

    getCustomerCount() {
        const customerCount = document.createElement('div');
        customerCount.classList.add('customer-count');
        customerCount.appendChild(getMaterialIcon('group'));
        const customerCountText = document.createElement('span');
        customerCountText.textContent = `0 Customers`;
        customerCount.appendChild(customerCountText);
        return customerCount;
    }

    getItemContainer() {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        return itemContainer;
    }
}

class Counter {
    constructor(index) {
        this.index = index;
        const builder = new CounterBuilder(index);
        this.counter = builder.getCounter();
        this.itemContainer = this.counter.querySelector('.item-container');
        counterContainer.appendChild(this.counter);
    }
}

for (let i = 0; i < maxCounters; i++) {
    new Counter(i + 1);
}
