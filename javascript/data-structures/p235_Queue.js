/*
    CLRS Section 10.1, p. 235 & Exercise 10.1-4, p. 235
*/

class Queue {
    constructor(Q = [], head = 0, tail = 0) {
        this.Q = Q;
        this.head = head;
        this.tail = tail;
    }

    queueEmpty = () => this.head === this.tail;

    queueFull = () => (this.head === this.tail + 1) 
                        || (this.head === 0 && this.tail === this.Q.length - 1);

    enqueue = (x) => {
        if (this.queueFull()) {
            throw new Error('overflow');
        } else {
            this.Q[this.tail] = x;
            if (this.tail === this.Q.length - 1) {
                this.tail = 0;
            } else {
                this.tail++;
            }
        }
    }

    dequeue = () => {
        if(this.queueEmpty()) {
            throw new Error('underflow');
        } else {
            const x = this.Q.splice(this.head, 1, undefined);
            if (this.head === this.Q.length - 1) {
                this.head = 0;
            } else {
                this.head++;
            }
            return x;
        }
    }
}

module.exports = {
    Queue
}