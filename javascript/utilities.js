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

class TreeNode {
    constructor(key, parent = null, left = null, right = null) {
        this.key = key;
        this.parent = parent;
        this.left = left;
        this.right = right;
    }
};

module.exports.A = A;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;