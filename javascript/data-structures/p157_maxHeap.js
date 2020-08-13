/*
    CLRS Section 6.3, p. 157
*/

class MaxHeap {
    constructor(A = [], heapSize = 0) {
        this.A = A;
        this.heapSize = heapSize;
    }

    parent = (i) => Math.floor(parseInt((i - 2) / 2));

    left = (i) => 2 * i + 1;

    right = (i) => 2 * i + 2;

    maxHeapify = (i) => {
        let l = this.left(i);
        let r = this.right(i);
        let largest;
        if ((l < this.heapSize) && (this.A[l] > this.A[i])) {
            largest = l;
        } else {
            largest = i;
        }
        if ((r < this.heapSize) && (this.A[r] > this.A[largest])) {
            largest = r;
        }
        if (largest !== i) {
            [this.A[i], this.A[largest]] = [this.A[largest], this.A[i]];
            this.maxHeapify(largest);
        }
    }

    buildMaxHeap = () => {
        this.heapSize = this.A.length;
        for(let i = Math.floor((this.A.length - 1)/2); i >= 0; i--) {
            this.maxHeapify(i);
        }
    }
}

module.exports = {
    MaxHeap
}