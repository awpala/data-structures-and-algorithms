/* 
    This file contains abstract data types (ADTs) used as 
    auxiliary data structures in the main data structures
    and algorithms
*/

// A is a list ADT, represented by an array
const A = [];

class ListNode {
    constructor(key, prev = null, next = null) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
};

module.exports = (
    A,
    ListNode
);