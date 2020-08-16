/*
    This application demonstrates use of the data structures and
    algorithms in the console
*/

// import utilities (ADTs)
let { A, ListNode, TreeNode, RBTreeNode } = require('./utilities');


// ----- SORTING ALGORITMS ----- //
console.log('\n|----- SORTING ALGORITHMS ----|');

// CLRS Section 2.1 - Insertion Sort
const { insertionSort } = require('./sorting/p018_insertionSort');
A = [];

console.log('\nSection 2.1 - Insertion Sort');

A = [5, 2, 4, 6, 1, 3]; // cf. Figure 2.2, p. 18
insertionSort(A);
console.log('\nsorted:', A);

A = [31, 41, 59, 26, 41, 58]; // cf. Exercise 2.1-1, p. 22
insertionSort(A);
console.log('\nsorted:', A);

// CLRS Section 2.3 - Merge Sort
const { mergeSort } = require('./sorting/p034_mergeSort');
A = [];

console.log('\nSection 2.3 - Merge Sort');

A = [2, 4, 5, 7, 1, 2, 3, 6]; // cf. Figure 2.3, p. 32
mergeSort(A, 0, A.length-1);
console.log('\nsorted:', A);

A = [3, 41, 52, 26, 38, 57, 9, 49]; // cf. Exercise 2.3-1, p. 37
mergeSort(A, 0, A.length-1);
console.log('\nsorted:', A);

// CLRS Chapter 2 Problems - Bubble Sort
const { bubbleSort } = require('./sorting/p040_bubbleSort');
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

A = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11]; // cf. Exercise 7.1-1, p. 173
quicksort(A, 0, A.length-1);
console.log('\nsorted:', A);

// CLRS Section 8.2 - Counting Sort
const { countingSort } = require('./sorting/p195_countingSort');
A = [];
let B = [];

console.log('\nSection 8.2 - Counting Sort');

A = [2, 5, 3, 0, 2, 3, 0, 3]; // cf. Figure 8.2, p. 195
B = new Array(A.length);
countingSort(A, B, Math.max(...A)); // N.B. k = 5
console.log('\nsorted:', B);


// ----- DATA STRUCTURES ----- //
console.log('\n\n|----- DATA STRUCTURES ----|');

// CLRS Section 6.3 - Max-Heap
const { MaxHeap } = require('./data-structures/p157_MaxHeap');
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
const { MinHeap } = require('./data-structures/p156_MinHeap');
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
const { MaxPQ } = require('./data-structures/p164_MaxPQ');
A = [];

console.log('\nSection 6.5 - Max Priority Queue');

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.5, p. 164
let maxPQ = new MaxPQ(A, A.length);
maxPQ.buildMaxHeap();
console.log('\nafter buildMaxHeap:', maxPQ.A);
maxPQ.heapIncreaseKey(8, 15);
console.log('after heapIncreaseKey(4 -> 15):', maxPQ.A);

A = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1]; // cf. Exercise 6.5-2, p. 165
maxPQ = new MaxPQ(A, A.length);
maxPQ.buildMaxHeap();
console.log('\nafter buildMaxHeap:', maxPQ.A);
maxPQ.maxHeapInsert(10);
console.log('after maxHeapInsert(10):', maxPQ.A);

// TO-DO: fix heapDelete
// A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.5, p. 164
// maxPQ = new MaxPQ(A, A.length);
// maxPQ.heapDelete(9);
// maxPQ.heapDelete(2);
// console.log('\nafter heapDelete:', maxPQ.A, maxPQ.heapSize);

// CLRS Section 6.5 Exercises - Min Priority Queue
const { MinPQ } = require('./data-structures/p165_MinPQ');
A = [];

console.log('\nExercise 6.5-3 - Min Priority Queue');

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1]; // cf. Figure 6.5, p. 164
let minPQ = new MinPQ(A, A.length);
minPQ.buildMinHeap();
console.log('\nafter buildMinHeap:', minPQ.A);
minPQ.heapDecreaseKey(5, 2);
console.log('after heapDecreaseKey(9 -> 2):', minPQ.A);

A = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1]; // cf. Exercise 6.5-2, p. 165
minPQ = new MinPQ(A, A.length);
minPQ.buildMinHeap();
console.log('\nafter buildMinHeap:', minPQ.A);
minPQ.minHeapInsert(6);
console.log('after minHeapInsert(6):', minPQ.A);

// CLRS Section 10.1 - Stack
const { Stack } = require('./data-structures/p233_Stack');

console.log('\nSection 10.1 - Stack');

let S = new Stack([15, 6, 2, 9, undefined, undefined, undefined], 3); // cf. Figure 10.1, p. 233
S.push(17);
S.push(3);
console.log('\nafter push(17), push(3):', S.S);
S.pop();
console.log('after pop():', S.S);

S = new Stack(new Array(6).fill(undefined)); // cf. Exercise 10.1-1, p. 235
S.push(4);
S.push(1);
S.push(3);
console.log('\nafter push(4), push(1), push(3):', S.S);
S.pop();
S.push(8);
console.log('after pop(), push(8):', S.S);
S.pop();
console.log('after pop():', S.S);

// CLRS Section 10.1 - Queue
const { Queue } = require('./data-structures/p235_Queue');

console.log('\nSection 10.1 - Queue');

let Q = new Queue([undefined, undefined, undefined, undefined, undefined, undefined, 15, 6, 9, 8, 4, undefined], 6, 11); // cf. Figure 10.2, p. 234
Q.enqueue(17);
Q.enqueue(3);
Q.enqueue(5);
console.log('\nafter enqueue(17), enqueue(3), enqueue(5):', Q.Q);
Q.dequeue();
console.log('after dequeue():', Q.Q);


Q = new Queue(new Array(6).fill(undefined)); // cf. Exercise 10.1-3, p. 235
Q.enqueue(4);
Q.enqueue(1);
Q.enqueue(3);
console.log('\nafter enqueue(4), enqueue(1), enqueue(3):', Q.Q);
Q.dequeue();
console.log('after dequeue():', Q.Q);
Q.enqueue(8);
Q.dequeue();
console.log('after enqueue(8), dequeue():', Q.Q);

// CLRS Section 10.1 Exercises - Deque
const { Deque } = require('./data-structures/p236_Deque');

console.log('\nExercise 10.1-5 - Deque');

Q = new Deque(new Array(6).fill(undefined)); // cf. Exercise 10.1-3, p. 235
Q.tailEnqueue(4);
Q.tailEnqueue(1);
Q.tailEnqueue(3);
console.log('\nafter tailEnqueue(4), tailEnqueue(1), tailEnqueue(3):', Q.Q);
Q.headDequeue();
console.log('after headDequeue():', Q.Q);
Q.headEnqueue(8);
console.log('after headEnqueue(8):', Q.Q);
Q.tailDequeue();
console.log('after tailDequeue():', Q.Q);

// CLRS Section 10.2 - Linked List
const { LinkedList } = require('./data-structures/p238_LinkedList');

console.log('\nSection 10.2 - Linked List');

let L = new LinkedList();
L.listInsert(new ListNode(1));
L.listInsert(new ListNode(4));
L.listInsert(new ListNode(16));
L.listInsert(new ListNode(9)); // cf. Figure 10.3, p. 237
L.listInsert(new ListNode(25));
console.log('\nafter listInsert(25):'
    , L.head.key, '->'
    , L.head.next.key, '->'
    , L.head.next.next.key, '->'
    , L.head.next.next.next.key, '->'
    , L.head.next.next.next.next.key, '->'
    , L.head.next.next.next.next.next
);
let deleteNode = L.listSearch(4);
L.listDelete(deleteNode);
console.log('after listDelete(4):'
    , L.head.key, '->'
    , L.head.next.key, '->'
    , L.head.next.next.key, '->'
    , L.head.next.next.next.key, '->'
    , L.head.next.next.next.next
);

// CLRS Section 10.2 - Circular Linked List
const { CircularLL } = require('./data-structures/p240_CircularLL');

console.log('\nSection 10.2 - Circular Linked List');

L = new CircularLL();
L.listInsert(new ListNode(1));
L.listInsert(new ListNode(4));
L.listInsert(new ListNode(16));
L.listInsert(new ListNode(9)); // cf. Figure 10.4, p. 239
L.listInsert(new ListNode(25));
console.log('\nafter listInsert(25):'
    , L.nil.next.key, '->'
    , L.nil.next.next.key, '->'
    , L.nil.next.next.next.key, '->'
    , L.nil.next.next.next.next.key, '->'
    , L.nil.next.next.next.next.next.key, '->'
    , L.nil.next.next.next.next.next.next.key
);
deleteNode = L.listSearch(1);
L.listDelete(deleteNode);
console.log('after listDelete(1):'
, L.nil.next.key, '->'
, L.nil.next.next.key, '->'
, L.nil.next.next.next.key, '->'
, L.nil.next.next.next.next.key, '->'
, L.nil.next.next.next.next.next.key
);

// CLRS Section 11.2 - Hash Table with Chaining
const { HashTableChaining } = require('./data-structures/p258_HashTableChaining');

console.log('\nSection 11.2 - Hash Table with Chaining');

let T = new HashTableChaining(9); // cf. Exercise 11.2-2, p. 261
T.chainedHashInsert(new ListNode(5));
T.chainedHashInsert(new ListNode(28));
T.chainedHashInsert(new ListNode(19));
T.chainedHashInsert(new ListNode(15));
T.chainedHashInsert(new ListNode(20));
T.chainedHashInsert(new ListNode(33));
T.chainedHashInsert(new ListNode(12));
T.chainedHashInsert(new ListNode(17));
T.chainedHashInsert(new ListNode(10));
console.log('\nafter chainedHashInsert\'s:');
T.T.forEach((list, i) => {
    if(list.head === null) {
        console.log(`${i}: ${list.head}`);
    } else {
        let str = `${i}: `;
        let pointer = list.head;
        while(pointer !== null) {
            str += `${pointer.key} -> `;
            pointer = pointer.next;
        }
        str += 'null';
        console.log(str);
    }
})
deleteNode = T.chainedHashSearch(19);
T.chainedHashDelete(deleteNode);
console.log('after chainedHashDelete(19):');
T.T.forEach((list, i) => {
    if(list.head === null) {
        console.log(`${i}: ${list.head}`);
    } else {
        let str = `${i}: `;
        let pointer = list.head;
        while(pointer !== null) {
            str += `${pointer.key} -> `;
            pointer = pointer.next;
        }
        str += 'null';
        console.log(str);
    }
})

// CLRS Section 11.4 - Hash Table with Probing
const { HashTableProbing } = require('./data-structures/p271_HashTableProbing');

console.log('\nSection 11.4 - Hash Table with Probing');

T = new HashTableProbing(9, 'lp'); // cf. Exercise 11.4-1, p. 277
T.hashInsert(10);
T.hashInsert(22);
T.hashInsert(31);
T.hashInsert(4);
T.hashInsert(15);
T.hashInsert(28);
T.hashInsert(17);
T.hashInsert(88);
T.hashInsert(59);
console.log(`\nafter hashInsert's with linear probing, with ${T.collisionsIns} total collisions:`, T.T);
T.hashSearch(59);
console.log(`hashSearch(59) with linear probing makes ${T.collisionsSrch} collisions`);
T.hashDelete(4);
console.log(`after hashDelete(4) with linear probing, with ${T.collisionsDel} total collisions:`, T.T);

T = new HashTableProbing(9, 'qp');
T.hashInsert(10);
T.hashInsert(22);
T.hashInsert(31);
T.hashInsert(4);
T.hashInsert(15);
T.hashInsert(28);
T.hashInsert(17);
T.hashInsert(88);
T.hashInsert(59);
console.log(`\nafter hashInsert's with quadratic probing, with ${T.collisionsIns} total collisions:`, T.T);
T.hashSearch(59);
console.log(`hashSearch(59) with quadratic probing makes ${T.collisionsSrch} collisions`);
T.hashDelete(4);
console.log(`after hashDelete(4) with quadratic probing, with ${T.collisionsDel} total collisions:`, T.T);

T = new HashTableProbing(9, 'dh');
T.hashInsert(10);
T.hashInsert(22);
T.hashInsert(31);
T.hashInsert(4);
T.hashInsert(15);
T.hashInsert(28);
T.hashInsert(17);
T.hashInsert(88);
T.hashInsert(59);
console.log(`\nafter hashInsert's with double hashing, with ${T.collisionsIns} total collisions:`, T.T);
T.hashSearch(59);
console.log(`hashSearch(59) with double hashing makes ${T.collisionsSrch} collisions`);
T.hashDelete(4);
console.log(`after hashDelete(4) with double hashing, with ${T.collisionsDel} total collisions:`, T.T);

console.log(
    '\nSummary of operations for hash table with probing (total collisions):'
    ,'\n| Collision Resolution | hashInsert\'s | hashSearch(59) | hashDelete(4)|'
    ,'\n|----------------------|--------------|----------------|--------------|'
    ,'\n| Linear Probing       | 14           | 7              | 2            |'
    ,'\n| Quadratic Probing    | 11           | 6              | 2            |'
    ,'\n| Double Hashing       | 4            | 0              | 1            |'
);

// CLRS Chapter 12 - Binary Search Tree
const { BinarySearchTree } = require('./data-structures/p298_BinarySearchTree');

console.log('\nChapter 12 - Binary Search Tree');

T = new BinarySearchTree();
T.treeInsert(new TreeNode(12));
T.treeInsert(new TreeNode(5));
T.treeInsert(new TreeNode(18));
T.treeInsert(new TreeNode(2));
T.treeInsert(new TreeNode(9));
T.treeInsert(new TreeNode(15));
T.treeInsert(new TreeNode(19));
T.treeInsert(new TreeNode(17)); // cf. Figure 12.3, p. 295
console.log('\nafter treeInsert(17):');
let spacing = '      ';
let offset = Math.pow(2, Math.log2(Math.ceil(T.size - 1)));
let nodeStr = `${spacing.repeat(offset)}${T.root.key}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${T.root.left.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.right.key}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${T.root.left.left.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.left.right.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.right.left.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.right.right.key}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${T.root.left.left.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.left.left.right}${spacing.repeat(offset * 2.5)}` // null
        +`${T.root.left.right.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.left.right.right}${spacing.repeat(offset * 2.5)}` // null
        +`${T.root.right.left.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.right.left.right.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.left.right.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.left.right.right}`; // null
console.log(nodeStr);
deleteNode = T.treeSearch(T.root, 18);
T.treeDelete(deleteNode);
console.log('\nafter treeDelete(18):');
offset = Math.pow(2, Math.log2(Math.ceil(T.size - 1)));
nodeStr = `${spacing.repeat(offset)}${T.root.key}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${T.root.left.key}${spacing.repeat(offset * 2.25)}`
        +`${T.root.right.key}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${T.root.left.left.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.left.right.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.right.left.key}${spacing.repeat(offset * 2.5)}`
        +`${T.root.right.right}`; // null
console.log(nodeStr);
offset /= 2;
nodeStr = `${T.root.left.left.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.left.left.right}${spacing.repeat(offset * 2.5)}` // null
        +`${T.root.left.right.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.left.right.right}${spacing.repeat(offset * 2.5)}` // null
        +`${T.root.right.left.left}${spacing.repeat(offset * 2)}` // null
        +`${T.root.right.left.right.key}${spacing.repeat(offset * 2.5)}`;
console.log(nodeStr);
console.log('\ninorderTreeWalk(root):');
T.inorderTreeWalk(T.root);
console.log('\preorderTreeWalk(root):');
T.preorderTreeWalk(T.root);
console.log('\postorderTreeWalk(root):');
T.postorderTreeWalk(T.root);
console.log('\ntreeMinimum(root):', T.treeMinimum(T.root).key);
console.log('treeMaximum(root):', T.treeMaximum(T.root).key);
console.log('treePredecessor(root):', T.treePredecessor(T.root).key);
console.log('treePredecessor(root):', T.treeSuccessor(T.root).key);

// CLRS Chapter 13 - Red-Black Tree
const { RedBlackTree } = require('./data-structures/p326_RedBlackTree');

console.log('\nChapter 13 - Red-Black Tree');

T = new RedBlackTree();

spacing = '      ';
let finalTreeSize = 6;
let maxCharWidth = 4;

T.RBInsert(new RBTreeNode(41)); // cf. Exercise 13.3-2, p. 322
console.log('\nafter RBInsert(41):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
T.RBInsert(new RBTreeNode(38));
console.log('\nafter RBInsert(38):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}`
console.log(nodeStr);
T.RBInsert(new RBTreeNode(31));
console.log('\nafter RBInsert(31):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}`;
console.log(nodeStr);
T.RBInsert(new RBTreeNode(12));
console.log('\nafter RBInsert(12):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.left.right.key).padStart(maxCharWidth)}|${T.root.left.left.right.color[0]}`;
console.log(nodeStr);
T.RBInsert(new RBTreeNode(19));
console.log('\nafter RBInsert(19):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.left.right.key).padStart(maxCharWidth)}|${T.root.left.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.left.key).padStart(maxCharWidth)}|${T.root.left.right.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.right.right.key).padStart(maxCharWidth)}|${T.root.left.right.right.color[0]}`;
console.log(nodeStr);
T.RBInsert(new RBTreeNode(8));
console.log('\nafter RBInsert(8):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.left.right.key).padStart(maxCharWidth)}|${T.root.left.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.left.key).padStart(maxCharWidth)}|${T.root.left.right.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.right.right.key).padStart(maxCharWidth)}|${T.root.left.right.right.color[0]}`;
console.log(nodeStr);
nodeStr = `${String(T.root.left.left.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.left.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.left.left.right.key).padStart(maxCharWidth)}|${T.root.left.left.left.right.color[0]}`;
console.log(nodeStr);

T.RBDelete(T.treeSearch(T.root, 8)); // cf. Exercise 13.4-3, p. 330
console.log('\nafter RBDelete(8):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.left.right.key).padStart(maxCharWidth)}|${T.root.left.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.left.key).padStart(maxCharWidth)}|${T.root.left.right.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.right.right.key).padStart(maxCharWidth)}|${T.root.left.right.right.color[0]}`;
console.log(nodeStr);
T.RBDelete(T.treeSearch(T.root, 12));
console.log('\nafter RBDelete(12):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${' '.padStart(maxCharWidth + 2)}${spacing.repeat(offset)}`
        +`${' '.padStart(maxCharWidth + 2)}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.left.key).padStart(maxCharWidth)}|${T.root.left.right.left.color[0]}${spacing.repeat(offset)}`
        +`${String(T.root.left.right.right.key).padStart(maxCharWidth)}|${T.root.left.right.right.color[0]}`;
console.log(nodeStr);
T.RBDelete(T.treeSearch(T.root, 19));
console.log('\nafter RBDelete(19):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.left.key).padStart(maxCharWidth)}|${T.root.left.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.left.right.key).padStart(maxCharWidth)}|${T.root.left.right.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
T.RBDelete(T.treeSearch(T.root, 31));
console.log('\nafter RBDelete(31):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${' '.padStart(maxCharWidth + 2)}${spacing.repeat(offset * 2)}`
        +`${' '.padStart(maxCharWidth + 2)}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.left.key).padStart(maxCharWidth)}|${T.root.right.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.right.key).padStart(maxCharWidth)}|${T.root.right.right.color[0]}`;
console.log(nodeStr);
T.RBDelete(T.treeSearch(T.root, 38));
console.log('\nafter RBDelete(38):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
offset /= 2;
nodeStr = `${spacing.repeat(offset)}`
        +`${String(T.root.left.key).padStart(maxCharWidth)}|${T.root.left.color[0]}${spacing.repeat(offset * 2)}`
        +`${String(T.root.right.key).padStart(maxCharWidth)}|${T.root.right.color[0]}`;
console.log(nodeStr);
T.RBDelete(T.treeSearch(T.root, 41));
console.log('\nafter RBDelete(41):');
offset = Math.pow(2, Math.log2(Math.ceil(finalTreeSize - 1))) * 2;
nodeStr = `${spacing.repeat(offset)}${String(T.root.key).padStart(maxCharWidth)}|${T.root.color[0]}`
console.log(nodeStr);
