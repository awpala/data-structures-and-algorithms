/*
    CLRS Section 6.5, p. 164
*/

const { MaxHeap } = require('../data-structures/p157_maxHeap');

class MaxPQ extends MaxHeap {
    constructor(A, heapSize) {
        super(A, heapSize);
    }

    heapMaximum = () => this.A[0];

    heapExtractMax = () => {
        if (this.heapSize < 1) {
            throw new Error('heap underflow');
        }
        const max = this.heapMaximum();
        this.A[0] = this.A.pop();
        this.heapSize--;
        this.maxHeapify(0);
        return max;
    }

    heapIncreaseKey = (i, key) => {
        if (key < this.A[i]) {
            throw new Error('new key is smaller than current key');
        }
        this.A[i] = key;
        while (i > 0 && (this.A[this.parent(i)] < this.A[i])) {
            [this.A[i], this.A[this.parent(i)]] = [this.A[this.parent(i)], this.A[i]];
            i = this.parent(i);
        }
    }

    maxHeapInsert = (key) => {
        this.heapSize++;
        this.A.push(Number.NEGATIVE_INFINITY);
        this.heapIncreaseKey(this.heapSize - 1, key);
    }

    // N.B. cf. Exercise 6.5-8, p. 166
    heapDelete = (i) => { // TO-DO: not correct for ELSE case
        // if (this.A[i] > this.A[this.heapSize - 1]) {
        //     this.A[i] = this.A.pop();
        //     this.maxHeapify(i);
        // } else {
        //     if (i < this.heapSize - 1) {
        //         const key = this.A.pop();
        //         this.heapIncreaseKey(i, key);
        //     } else {
        //         this.heapIncreaseKey(i, this.A[this.heapSize - 1]);
        //     }
        // }
        // this.heapSize--;
    } 
}

module.exports = {
    MaxPQ
}