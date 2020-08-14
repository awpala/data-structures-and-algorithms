/*
    CLRS Exercise 10.1-5, p. 236
*/

class Deque {
    constructor(Q = [], head = 0, tail = 0) {
        this.Q = Q;
        this.head = head;
        this.tail = tail;
    }

    dequeEmpty = () => this.head === this.tail;

    dequeFull = () => (this.head === this.tail + 1) 
                        || (this.head === 0 && this.tail === this.Q.length - 1);

    headEnqueue = (x) => {
        if (this.dequeFull()) {
            throw new Error('overflow');
        } else {
            if (this.head === 0) {
                this.head = this.Q.length - 1;
            } else {
                this.head--;
            }
            this.Q[this.head] = x;
        }
    }

    tailEnqueue = (x) => {
        if (this.dequeFull()) {
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

    headDequeue = () => {
        if(this.dequeEmpty()) {
            throw new Error('underflow');
        } else {
            const x = this.Q.splice(this.head, 1, undefined)[0];
            if (this.head === this.Q.length - 1) {
                this.head = 0;
            } else {
                this.head++;
            }
            return x;
        }
    }

    tailDequeue = () => {
        if(this.dequeEmpty()) {
            throw new Error('underflow');
        } else {
            if (this.tail === 0) {
                this.tail = this.Q.length - 1;
            } else {
                this.tail--;
            }
            return this.Q.splice(this.tail, 1, undefined)[0];
        }
    }
}

module.exports = {
    Deque
}