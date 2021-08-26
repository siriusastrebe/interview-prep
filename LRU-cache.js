// How to implement an LRU Cache
const fs = require('fs');


// We need a hash table that has quick lookup for if an item is available in the cache or not
// We need a doubly-linked-list. This can be simulated in JS using arrays, though an enqueue is an O(n) operation for arrays
// Otherwise, you can create a doubly-linked list using objects with a next and prev

class Link {
  constructor(data) {
    return {prev: null, next: null, data: data}
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(data) {
    console.log('Enqueuing');
    const link = new Link(data);
    link.next = this.head;
    if (this.head) {
      this.head.prev = link;
    } else {
      this.tail = link;
    }
    this.head = link;
    this.size++;
    return link;
  }
  dequeue() {
    console.log('Dequeuing');
    if (this.tail && this.tail.prev) {
      const removed = this.tail;
      removed.prev.next = null;
      this.tail = removed.prev;
      this.size--;
      return removed;
    }
  }
  requeue(link) {
    console.log('Requeuing');
    if (link.prev) {
      link.prev.next = link.next;
    }
    if (link.next) {
      link.next.prev = link.prev;
    }

    link.prev = null;
    link.next = this.head;
    this.head.prev = link;
    this.head = link;

    return link;
  }
  toArray() {
    let link = this.head;
    let all = [link];

    while (link.next) {
      all.push(link.next);
      link = link.next;
    }
    return all;
  }
}

class Cache {
  constructor(maxSize) {
    this.list = new DoublyLinkedList();
    this.hash = {};
    this.maxSize = maxSize;
  }
  open(filename) {
    if (this.hash[filename]) {
      this.list.requeue(this.hash[filename]);
      return this.hash[filename].data.file;
    } 

    if (this.list.size >= this.maxSize) {
      const removed = this.list.dequeue();
      delete this.hash[removed.data.filename];
    }

    try {
      const data = fs.readFileSync(__dirname + '/' + filename).toString();
      const link = this.list.enqueue({file: data, filename: filename});
      this.hash[filename] = link;
      return data;
    } catch (e) {
      throw e;
    }
  }
  log() {
    const all = this.list.toArray();
    console.log(all.map(a => a.data.filename));
    console.log(Object.keys(this.hash));
  }
}



let cache = new Cache(4);
let file;
let str;

str = 'findmissinginteger.js';
file = cache.open(str);
console.log('-------- Running code in -------- ', str);
eval(file);

console.log('');
console.log('');

str = 'nonrepeat-character.js'
file = cache.open(str);
console.log('-------- Running code in -------- ', str);
eval(file);

console.log('');
console.log('');

str = 'reverse-string.js'
file = cache.open(str);
console.log('-------- Running code in -------- ', str);
eval(file);


console.log('');
console.log('');



str = 'detect-rotation.js'
file = cache.open(str);
console.log('-------- Running code in -------- ', str);
eval(file);

console.log('');
console.log('');


str = 'factorial.js'
file = cache.open(str);
console.log('-------- Running code in -------- ', str);
eval(file);

console.log('');
console.log('');


str = 'longest-substring.js'
file = cache.open(str);
console.log('-------- Running code in -------- ', str);
eval(file);

console.log('');
console.log('');

console.log('Logging LRU cache list');
cache.log();


// let l = new DoublyLinkedList();
// console.log('Linked list with no links ', l);
// 
// l.enqueue()
// l.enqueue()
// console.log('Linked list with two links ', l.head, l.tail);
