/*
    CLRS Section 6.4, p. 160
*/

const { MaxHeap } = require('../data-structures/p157_maxHeap');

const heapsort = (A) => {
    const maxHeap = new MaxHeap(A, A.length);
    maxHeap.buildMaxHeap();
    for(let i = A.length - 1; i >= 1; i--) {
        [A[0], A[i]] = [A[i], A[0]];
        maxHeap.heapSize--;
        maxHeap.maxHeapify(0);
    }
}

module.exports = {
    heapsort
}