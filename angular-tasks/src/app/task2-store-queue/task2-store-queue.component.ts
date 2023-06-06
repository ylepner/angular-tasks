import { Component } from '@angular/core';

interface Checkout {
  id: number;
  items: items
}

const checkouts: Checkout[] = [
  {
    id: 1,
    items: [2, 5]
  },
  {
    id: 2,
    items: [4, 10, 23]
  },
  {
    id: 3,
    items: [10]
  },
  {
    id: 4,
    items: [1, 1, 2]
  },
  {
    id: 5,
    items: [1, 6, 30]
  },
]

type items = number[]

@Component({
  selector: 'app-task2-store-queue',
  templateUrl: './task2-store-queue.component.html',
  styleUrls: ['./task2-store-queue.component.scss']
})


export class Task2StoreQueueComponent {
  itemsNumber: number = 0;
  checkouts: Checkout[] = checkouts
  queue: number[] = []

  constructor() {
    this.startInterval()
  }

  addToQueue(line: Checkout) {
    line.items.push(Number(this.itemsNumber))
    this.itemsNumber = 0
    return line
  }

  defineCheckout() {
    // define where is min items
    let minItems: number = +Infinity
    let line: Checkout = { id: 0, items: [] }
    for (let checkout of checkouts) {
      const allItemsInQueue = checkout.items.reduce((a, b) => a + b, 0)
      if (allItemsInQueue < minItems) {
        minItems = allItemsInQueue
        line = checkout
      }
    }
    this.addToQueue(line)
    console.log(line)
  }

  startInterval() {
    setInterval(() => {
      for (let line of checkouts) {
        if (line.items[0] > 0) {
          line.items[0] -= 1
        }
        else {
          line.items.shift()
        }
      }
    }, 1000)
  }
}
