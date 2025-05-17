class Counter {
    constructor(index) {
        this.index = index;
        const builder = new CounterBuilder(index);
        this.counter = builder.getCounter();
        this.itemContainer = this.counter.querySelector('.item-container');
        this.customerCount = this.counter.querySelector(`#customer-count-${this.index}`);
        this.totalItemContainer = this.counter.querySelector(`#total-item-count-${this.index}`);
        counterContainer.appendChild(this.counter);
    }

    get totalItemCount() {
        return parseInt(this.counter.getAttribute('data-total-items'));
    }

    update() {
        this.calculateTotalItems();
        this.calculateCustomerCount();
    }

    calculateTotalItems() {
        let totalItems = 0;
        this.itemContainer.childNodes.forEach(x => (totalItems += parseInt(x.getAttribute('data-item-count'))));
        this.counter.setAttribute('data-total-items', totalItems);
        this.totalItemContainer.textContent = `Total items: ${totalItems}`;
        return totalItems;
    }

    calculateCustomerCount() {
        const customerCount = this.itemContainer.childNodes.length;
        if(customerCount !== 1) {
            this.customerCount.textContent = customerCount + ' Customers';
        } else {
            this.customerCount.textContent = customerCount + ' Customer';
        }
    }
}

class CounterBuilder {
    constructor(index) {
        this.index = index;
    }

    getCounter() {
        const counter = document.createElement('div');
        counter.setAttribute('data-counter-index', this.index);
        counter.setAttribute('data-total-items', 0);
        counter.classList.add('counter');
        counter.appendChild(this.getCounterHeaderContainer());
        counter.appendChild(this.getItemContainer());
        counter.appendChild(this.getTotalItemCount());
        return counter;
    }

    getCounterHeaderContainer() {
        const counterHeader = document.createElement('div');
        counterHeader.classList.add('counter-header-container');
        counterHeader.appendChild(this.getCounterHeader());
        counterHeader.appendChild(this.getCustomerCount());
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
        customerCountText.id = `customer-count-${this.index}`;
        customerCountText.textContent = `0 Customers`;
        customerCount.appendChild(customerCountText);
        return customerCount;
    }

    getItemContainer() {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');
        return itemContainer;
    }

    getTotalItemCount() {
        const totalItemCount = document.createElement('div');
        totalItemCount.classList.add('total-item-count');
        totalItemCount.id = `total-item-count-${this.index}`;
        totalItemCount.textContent = `Total items: 0`;
        return totalItemCount;
    }
}

const counterContainer = document.querySelector('#counter-container');

/**
 * This will display the max number of counters
 * We can changes this as per requirement
 */
const maxCounters = 3;

const allCounters = [];

for (let i = 0; i < maxCounters; i++) {
    allCounters.push(new Counter(i + 1));
}

let minCounter = allCounters[0];

const inputField = document.querySelector('#input-field');

const checkoutButton = document.querySelector('#checkout-button');

checkoutButton.onclick = event => {
    const inputValue = inputField.value;
    if (inputValue > 0) {
        minCounter.itemContainer.appendChild(getCounterItem(inputValue, minCounter));
        minCounter.update();
        calculateMinCounter();
    }
    inputField.value = '';
};
function getMaterialIcon(name) {
    const materialIcon = document.createElement('span');
    materialIcon.classList.add('material-symbols-outlined');
    materialIcon.textContent = name;
    return materialIcon;
}

function getCounterItem(count, counter) {
    const item = document.createElement('div');
    item.setAttribute('data-item-count', count);
    item.classList.add('item');
    const itemCount = document.createElement('div');
    itemCount.classList.add('item-count');
    itemCount.appendChild(getMaterialIcon('shopping_cart'));
    itemCount.appendChild(document.createTextNode(`${count} items`));
    item.appendChild(itemCount);
    const removeItem = document.createElement('button');
    removeItem.classList.add('remove-item');
    removeItem.textContent = '-';
    item.appendChild(removeItem);
    removeItem.onclick = event => {
        item.remove(); 
        counter.update();
        calculateMinCounter();
    };
    return item;
}

function calculateMinCounter() {
    allCounters.forEach(counter => {
        const currentItemCount = counter.totalItemCount;
        const minItemCount = minCounter.totalItemCount;
        if (currentItemCount < minItemCount) {
            minCounter = counter;
        }
        /**
         * This is to keep the leftmost counter as minCounter
         */
        else if (currentItemCount === minItemCount && counter.index < minCounter.index) {
            minCounter = counter;
        }
    });
}

