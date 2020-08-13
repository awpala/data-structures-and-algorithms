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

console.log('\n Section 2.1 - Insertion Sort');

A = [5, 2, 4, 6, 1, 3]; // cf. Figure 2.2, p. 18
insertionSort(A);
console.log('\n', A);

A = [31, 41, 59, 26, 41, 58]; // cf. Exercise 2.1-1, p. 22
insertionSort(A);
console.log('\n', A);

// CLRS Section 2.3 - Merge Sort
const { mergeSort } = require('./sorting/p34_mergeSort');
A = [];

console.log('\n Section 2.3 - Merge Sort');

A = [2, 4, 5, 7, 1, 2, 3, 6]; // cf. Figure 2.3, p. 32
mergeSort(A, 0, A.length-1);
console.log('\n', A);

A = [3, 41, 52, 26, 38, 57, 9, 49]; // cf. Exercise 2.3-1, p. 37
mergeSort(A, 0, A.length-1);
console.log('\n', A);

// CLRS Chapter 2 Problems - Bubble Sort
const { bubbleSort } = require('./sorting/p40_bubbleSort');
A = [];

console.log('\n Chapter 2 Problem 2-2 - Bubble Sort');

A = [3, 41, 52, 26, 38, 57, 9, 49]; // cf. Exercise 2.3-1, p. 37
bubbleSort(A);
console.log('\n', A);

