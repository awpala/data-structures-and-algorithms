/*
    CLRS Exercise 6.5-3, p. 165
*/

const { MinHeap } = require('./p156_MinHeap');

class MinPQ extends MinHeap {
    constructor(A, heapSize) {
        super(A, heapSize);
    }

    heapMinimum = () => this.A[0];

    heapExtractMin = () => {
        if (this.heapSize < 1) {
            throw new Error('heap underflow');
        }
        const min = this.heapMinimum();
        this.A[0] = this.A.pop();
        this.heapSize--;
        this.minHeapify(0);
        return min;
    }

    heapDecreaseKey = (i, key) => {
        if (key > this.A[i]) {
            throw new Error('new key is larger than current key');
        }
        this.A[i] = key;
        while (i > 0 && (this.A[this.parent(i)] > this.A[i])) {
            [this.A[i], this.A[this.parent(i)]] = [this.A[this.parent(i)], this.A[i]];
            i = this.parent(i);
        }
    }

    minHeapInsert = (key) => {
        this.heapSize++;
        this.A.push(Number.POSITIVE_INFINITY);
        this.heapDecreaseKey(this.heapSize - 1, key);
    }

    // N.B. cf. Exercise 6.5-8, p. 166
    heapDelete = (i) => {
        // TO-DO
    }
}

module.exports = {
    MinPQ
}