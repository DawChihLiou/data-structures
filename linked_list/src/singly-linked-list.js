import Node from './node';

export default function LinkedList() {
  this.length = 0;
  this.head = null;
}

/**
 * Add value to the end of the list
 * 
 * @param {*} value
 * @return {Node} node 
 */
LinkedList.prototype.add = function(value) {
  let node = new Node(value); 
  let current = this.head;
  
  // make new node the head of the empty list 
  if (!current) {
    this.head = node;
    this.length++;
    
    return node;
  }
  
  // add new node to the tail  
  while (current.next)
    current = current.next;

  current.next = node;
  this.length++;
  
  return node;
};

/**
 * Find node at given position
 * 
 * @param {number} index
 * @return {Node} current 
 */
LinkedList.prototype.get = function(index) {
  let current = this.head;
  let i = 0;
  
  if (index > this.length) 
    return `Node doesn't exist`;
  
  while (i < index) {
    current = current.next;
    i++;
  }

  return current;
};

/**
 * Remove value from the list
 *
 * @param {number} index
 * @return {Node} head 
 */
LinkedList.prototype.remove = function(index) {
  let current = this.head;
  let previous;
  let i = 0;
  
  if (index > this.length)
    return `Node doesn't exist`;
  
  // assign the second node as head if removing the first
  if (index === 0) {
    this.head = current.next;
    this.length--;

    return this.head;
  }
  
  // find the node and link the previous to the next node; 
  while (i < index) {
    previous = current;
    current = current.next;
    i++;
  }
  
  previous.next = current.next;
  current = null;
  this.length--;

  return this.head;
}; 
