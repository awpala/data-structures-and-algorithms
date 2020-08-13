/*
    This file uses the data structures and algorithms in the console
*/

// import utilities (ADTs)
let { A } = require('./utilities');


// ----- SORTING ALGORITMS ----- //
console.log('\n|----- SORTING ALGORITHMS ----|');

// CLRS Section 2.1 - Insertion Sort
const { insertionSort } = require('./sorting/p18_insertionSort');
A = [];

console.log('\nSection 2.1 - Insertion Sort');

A = [5, 2, 4, 6, 1, 3]; // cf. Figure 2.2, p. 18
insertionSort(A);
console.log('\nsorted:', A);

A = [31, 41, 59, 26, 41, 58]; // cf. Exercise 2.1-1, p. 22
insertionSort(A);
console.log('\nsorted:', A);

// CLRS Section 2.3 - Merge Sort
const { mergeSort } = require('./sorting/p34_mergeSort');
A = [];

console.log('\nSection 2.3 - Merge Sort');

A = [2, 4, 5, 7, 1, 2, 3, 6]; // cf. Figure 2.3, p. 32
mergeSort(A, 0, A.length-1);
console.log('\nsorted:', A);

A = [3, 41, 52, 26, 38, 57, 9, 49]; // cf. Exercise 2.3-1, p. 37
mergeSort(A, 0, A.length-1);
console.log('\nsorted:', A);

// CLRS Chapter 2 Problems - Bubble Sort
const { bubbleSort } = require('./sorting/p40_bubbleSort');
A = [];

console.log('\nProblem 2-2 - Bubble Sort');

A = [3, 41, 52, 26, 38, 57, 9, 49]; // cf. Exercise 2.3-1, p. 37
bubbleSort(A);
console.log('\nsorted:', A);

// CLRS Section 6.4 - Heapsort
const { heapsort } = require('./sorting/p160_heapsort');
A = [];

console.log('\nSection 6.4 - Heapsort');

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.4, p. 161
heapsort(A);
console.log('\nsorted:', A);

// CLRS Section 7.1 - Quicksort
const { quicksort } = require('./sorting/p171_quicksort');
A = [];

console.log('\nSection 7.1 - Quicksort');

A = [2, 8, 7, 1, 3, 5, 6, 4]; // cf. Figure 7.1, p. 172
quicksort(A, 0, A.length - 1);
console.log('\nsorted:', A);


// ----- DATA STRUCTURES ----- //
console.log('\n|----- DATA STRUCTURES ----|');

// CLRS Section 6.3 - Max-Heap
const { MaxHeap } = require('./data-structures/p157_maxHeap');
A = [];

console.log('\nSection 6.3 - Max-Heap');

A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]; // cf. Figure 6.2, p. 152
let maxHeap = new MaxHeap(A, A.length);
maxHeap.maxHeapify(1);
console.log('\nafter maxHeapify:', maxHeap.A);

A = [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0]; // cf. Exercise 6.2-1, p. 156
maxHeap = new MaxHeap(A, A.length);
maxHeap.maxHeapify(2);
console.log('\nafter maxHeapify:', maxHeap.A);

A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]; // cf. Figure 6.3, p. 158
maxHeap = new MaxHeap(A, A.length);
maxHeap.buildMaxHeap();
console.log('\nafter buildMaxHeap:', maxHeap.A);

A = [5, 3, 17, 10, 84, 19, 6, 22, 9]; // cf. Exercise 6.3-1, p. 159
maxHeap = new MaxHeap(A, A.length);
maxHeap.buildMaxHeap();
console.log('\nafter buildMaxHeap:', maxHeap.A);

// CLRS Section 6.3 - Min-Heap
const { MinHeap } = require('./data-structures/p156_minHeap');
A = [];

console.log('\nSection 6.3 - Min-Heap');

A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]; // cf. Figure 6.3, p. 158
let minHeap = new MinHeap(A, A.length);
minHeap.buildMinHeap();
console.log('\nafter buildMinHeap:', minHeap.A);

A = [5, 3, 17, 10, 84, 19, 6, 22, 9]; // cf. Exercise 6.3-1, p. 159
minHeap = new MinHeap(A, A.length);
minHeap.buildMinHeap();
console.log('\nafter buildMinHeap:', minHeap.A);

// CLRS Section 6.5 - Max Priority Queue
const { MaxPQ } = require('./data-structures/p164_maxPQ');
A = [];

console.log('\nSection 6.5 - Max Priority Queue');

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.5, p. 164
let maxPQ = new MaxPQ(A, A.length);
maxPQ.buildMaxHeap();
maxPQ.heapIncreaseKey(8, 15);
console.log('\nafter heapIncreaseKey:', maxPQ.A);

A = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1]; // cf. Exercise 6.5-2, p. 165
maxPQ = new MaxPQ(A, A.length);
maxPQ.buildMaxHeap();
maxPQ.maxHeapInsert(10);
console.log('\nafter maxHeapInsert:', maxPQ.A);

// TO-DO: fix heapDelete
// A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.5, p. 164
// maxPQ = new MaxPQ(A, A.length);
// maxPQ.heapDelete(9);
// maxPQ.heapDelete(2);
// console.log('\nafter heapDelete:', maxPQ.A, maxPQ.heapSize);

// CLRS Section 6.5 Exercises - Min Priority Queue
const { MinPQ } = require('./data-structures/p165_minPQ');
A = [];

console.log('\nExercise 6.5-3 - Min Priority Queue');

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.5, p. 164
let minPQ = new MinPQ(A, A.length);
minPQ.buildMinHeap();
minPQ.heapDecreaseKey(5, 2);
console.log('\nafter heapDecreaseKey:', minPQ.A);

A = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1]; // cf. Exercise 6.5-2, p. 165
minPQ = new MinPQ(A, A.length);
minPQ.buildMinHeap();
minPQ.minHeapInsert(6);
console.log('\nafter minHeapInsert:', minPQ.A);

