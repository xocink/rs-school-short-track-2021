const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.top = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (this.top) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.top = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    const firstNode = this.top;
    this.top = this.top.next;
    this.length--;
    return firstNode.value;
  }
}

module.exports = Queue;
