/*
    CLRS Section 10.2, p. 240
*/

const ListNode = require('../utilities');

class CircularLL {
    constructor() {
        const sentinel = new ListNode(null);
        sentinel.next = sentinel;
        sentinel.prev = sentinel;

        this.nil = sentinel;
    }

    listSearch = (k) => {
        let x = this.nil.next;
        while (x !== this.nil && x.key !== k) {
            x = x.next;
        }
        return x;
    }

    listInsert = (x) => {
        x.next = this.nil.next;
        this.nil.next.prev = x;
        this.nil.next = x;
        x.prev = this.nil;
    }

    listDelete = (x) => {
        x.prev.next = x.next;
        x.next.prev = x.prev;
    }
}

module.exports = {
    CircularLL
}