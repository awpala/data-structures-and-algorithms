/*
    CLRS Section 10.2, p. 238
*/

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    listSearch = (k) => {
        let x = this.head;
        while (x !== null && x.key !== k) {
            x = x.next;
        }
        return x;
    }

    listInsert = (x) => {
        x.next = this.head;
        if (this.head !== null) {
            this.head.prev = x;
        }
        this.head = x;
        x.prev = null;
    }

    listDelete = (x) => {
        if (x.prev !== null) {
            x.prev.next = x.next;
        } else {
            this.head = x.next;
        }
        if (x.next !== null) {
            x.next.prev = x.prev;
        }
    }
}

module.exports = {
    LinkedList
}