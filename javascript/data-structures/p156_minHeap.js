/*
    CLRS Chapter 6 Exercise 6.2-2, p. 156
*/

class MinHeap {
    constructor(A = [], heapSize = 0) {
        this.A = A;
        this.heapSize = heapSize;
    }

    parent = (i) => Math.floor((i - 1) / 2);

    left = (i) => 2 * i + 1;

    right = (i) => 2 * i + 2;

    minHeapify = (i) => {
        let l = this.left(i);
        let r = this.right(i);
        let smallest;
        if ((l < this.heapSize) && (this.A[l] < this.A[i])) {
            smallest = l;
        } else {
            smallest = i;
        }
        if ((r < this.heapSize) && (this.A[r] < this.A[smallest])) {
            smallest = r;
        }
        if (smallest !== i) {
            [this.A[i], this.A[smallest]] = [this.A[smallest], this.A[i]];
            this.minHeapify(smallest);
        }
    }

    buildMinHeap = () => {
        this.heapSize = this.A.length;
        for(let i = Math.floor((this.A.length - 1)/2); i >= 0; i--) {
            this.minHeapify(i);
        }
    }
}

module.exports = {
    MinHeap
}