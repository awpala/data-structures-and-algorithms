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
    constructor(key, p = null, left = null, right = null) {
        this.key = key;
        this.p = p;
        this.left = left;
        this.right = right;
    }
};

class RBTreeNode extends TreeNode {
    constructor(key, color = null, p = null, left = null, right = null) {
        super(key, p, left, right);
        this.color = color;
    }
}

class CharNode {
    constructor(char = null, freq = 0, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

module.exports.A = A;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
module.exports.RBTreeNode = RBTreeNode;
module.exports.CharNode = CharNode;
