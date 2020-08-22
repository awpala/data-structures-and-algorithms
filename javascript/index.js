/*
    This application demonstrates use of the data structures and
    algorithms in the console
*/

// import utilities (ADTs)
let { A, ListNode, TreeNode, RBTreeNode, GraphVertex } = require('./utilities');


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
    ,'\n|----------------------|--------------|----------------|---------------|'
    ,'\n| Collision Resolution | hashInsert\'s | hashSearch(59) | hashDelete(4) |'
    ,'\n|----------------------|--------------|----------------|---------------|'
    ,'\n| Linear Probing       | 14           | 7              | 2             |'
    ,'\n| Quadratic Probing    | 11           | 6              | 2             |'
    ,'\n| Double Hashing       | 4            | 0              | 1             |'
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


// ----- ALGORITHM DESIGN TECHNIQUES ----- //
console.log('\n\n|----- ALGORITHM DESIGN TECHNIQUES ----|');

// CLRS Section 15.1 - Dynamic Programming: Rod Cutting
const { RodCutting } = require('./algorithm-techniques/p369_RodCutting');

console.log('\nSection 15.1 - Dynamic Programming: Rod Cutting');

let p = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30]; // cf. Figure 15.1, p. 360
padding = 4;
let iStr = '   0', pStr = '   0';
p.forEach((_, i) => iStr += String(i + 1).padStart(padding));
p.forEach((price) => pStr += String(price).padStart(padding));
console.log('\nPrice list:');
console.log('   i:', iStr);
console.log('p[i]:', pStr);

let rodCutting = new RodCutting(p);
let optimalRevenue = rodCutting.memoizedCutRod();
console.log(`\nOptimized revenue for i = n = 10 via top-down method memoizedCutRod: \$${optimalRevenue}`);
optimalRevenue = rodCutting.bottomUpCutRod();
console.log(`Optimized revenue for i = n = 10 via bottom-up method bottomUpCutRod: \$${optimalRevenue}`);
let optimalRevenues = rodCutting.extendedBottomUpCutRod();
let rStr = '', sStr = '';
optimalRevenues[0].forEach((revenue) => rStr += String(revenue).padStart(padding));
optimalRevenues[1].forEach((firstCut) => sStr += String(firstCut).padStart(padding));
console.log(`\nOptimized revenue (r) and first-cut location (s) for i = 0...10:`);
console.log('   i:', iStr);
console.log('r[i]:', rStr);
console.log('s[i]:', sStr);

// CLRS Section 15.4 - Dynamic Programming: Longest Common Subsequence
const { LCSLength, printLCS, improvedPrintLCS } = require('./algorithm-techniques/p395_LCS');

console.log('\nSection 15.4 - Dynamic Programming: Longest Common Subsequence');

let X = 'ABCBDAB', Y = 'BDCABA'; // cf. Figure 15.8, p. 395
let [c, b] = LCSLength(X, Y);
console.log(`\nLongest common subsequence of ${X} and ${Y} is ${printLCS(b, X, X.length - 1, Y.length - 1)}`);

X = '10010101', Y = '010110110'; // cf. Exercise 15.4-1, p. 396
[c, b] = LCSLength(X, Y);
console.log(`\nLongest common subsequence of ${X} and ${Y} is ${improvedPrintLCS(c, X, Y)}`);

// CLRS Section 16.1 - Greedy Algorithm: Activity Selector
const { ActivitySelector } = require('./algorithm-techniques/p421_ActivitySelector');

console.log('\nSection 16.1 - Greedy Algorithm: Activity Selector');

let s = [1, 3, 0, 5, 3, 5, 6, 8, 8, 2, 12];
let f = [4, 5, 6, 7, 9, 9, 10, 11, 12, 14, 16];

let activitySelector = new ActivitySelector(s, f);
let selected = activitySelector.greedyActivitySelector();

console.log('\nMaximum-size subset of mutually compatible activities is:\n', selected);

// CLRS Exercise 16.2-2 - Dynamic Programming: 0-1 Knapsack Problem
const { Knapsack01 } = require('./algorithm-techniques/p427_Knapsack01');

console.log('\nExercise 16.2-2 - Dynamic Programming: 0-1 Knapsack Problem');

let v = [60, 100, 120]; // cf. Figure 16.2, p. 427
let w = [10, 20, 30];
let n = v.length;
let W = 50;

console.log('\nKnapsack problem values (v) and weights (w) for items (i):');

padding = 6;
let vStr = '';
v.forEach((value) => vStr += `\$${value}`.padStart(padding));
let wStr = '';
w.forEach((weight) => wStr += `${weight}`.padStart(padding));
iStr = '';
w.forEach((_, index) => iStr += `${index + 1}`.padStart(padding));
console.log('   i:', iStr);
console.log('v[i]:', vStr);
console.log('w[i]:', wStr);

let knapsack = new Knapsack01(v, w, W);
let maxValue = knapsack.knapsack01();
console.log(`\nMaximized value of ${n} items in 0-1 knapsack with weight limit of ${W}: \$${maxValue}`);

// CLRS Exercise 16.2-6 - Greedy Algorithm: Fractional Knapsack Problem
const { KnapsackFractional } = require('./algorithm-techniques/p428_KnapsackFractional');

console.log('\nExercise 16.2-6 - Greedy Algorithm: Fractional Knapsack Problem');

knapsack = new KnapsackFractional(v, w, W);

let fStr = '';
for(let key in knapsack.f) {
    fStr += `${knapsack.f[key]}`.padStart(padding);
}

console.log('\nKnapsack problem values (v), weights (w), and fractional values (f) for items (i):');
console.log('   i:', iStr);
console.log('v[i]:', vStr);
console.log('w[i]:', wStr);
console.log('f[i]:', fStr);

maxValue = knapsack.knapsackFractional();
console.log(`\nMaximized value of ${n} items in fractional knapsack with weight limit of ${W}: \$${maxValue}`);

// CLRS Section 16.3 - Greedy Algorithm: Huffman Codes
const { huffman, printHuffman } = require('./algorithm-techniques/p431_HuffmanCodes');

console.log('\nSection 16.3 - Greedy Algorithm: Huffman Codes');

let C = { // cf. Figure 16.3, p. 429
    'a': 45,
    'b': 13,
    'c': 12,
    'd': 16,
    'e': 9,
    'f': 5
}

console.log('\nCharacter frequencies:\n', C);

let codes = huffman(C);
console.log('\nEncodings via Huffman\'s algorithm:');
printHuffman(codes);


// ----- ADVANCED DATA STRUCTURES ----- //
console.log('\n\n|----- ADVANCED DATA STRUCTURES ----|');

// CLRS Section 21.3 - Disjoint Set with Union by Rank and Path Compression
const { DisjointSet } = require('./data-structures/p571_DisjointSet');

console.log('\nSection 21.3 - Disjoint Set with Union by Rank and Path Compression');

let representativeMembers = []
for (let i = 1; i <= 16; i++) { // cf. Exercise 21.2-2, p. 567
    representativeMembers.push(i);
}
let disjointSet = new DisjointSet(representativeMembers);
padding = 10;
console.log('\ninitial set:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
for(let i = 1; i <= 15; i += 2) {
    disjointSet.union(disjointSet.S[i], disjointSet.S[i + 1]);
}
console.log('\nafter union(i, i + 1) for i = 1...15 by 2:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
for(let i = 1; i <= 13; i += 4) {
    disjointSet.union(disjointSet.S[i], disjointSet.S[i + 2]);
}
console.log('\nafter union(i, i + 2) for i = 1...13 by 4:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
disjointSet.union(disjointSet.S[1], disjointSet.S[5]);
disjointSet.union(disjointSet.S[11], disjointSet.S[13]);
console.log('\nafter union(1, 5) and union(11, 13):\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
disjointSet.union(disjointSet.S[1], disjointSet.S[10]);
console.log('\nafter union(1, 10):\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
disjointSet.findSet(disjointSet.S[2]);
console.log('\nafter findSet(2), no path-compression side-effect:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
disjointSet.findSet(disjointSet.S[9]);
console.log('\nafter findSet(9), no path-compression side-effect:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
disjointSet.findSet(disjointSet.S[6]);
console.log('\nafter findSet(6), has path-compression side-effect on i = 6:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
disjointSet.findSet(disjointSet.S[16]);
console.log('\nafter findSet(16), has path-compression side-effect on i = 13, 15, 16:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}
for(let i = 1; i <= 16; i++) {
    disjointSet.findSet(disjointSet.S[i]);
}
console.log('\nafter findSet\'s on all members, path-compression side-effect causes all i\'s to have x[i].p = 1:\n');
console.log('x[i]      x[i].p    x[i].rank');
console.log('-'.repeat(padding * 3));
for(let i = 1; i <= 16; i++) {
    const ds = disjointSet.S[i];
    console.log(
    `${ds.key.toString().padEnd(padding)}`
    + `${ds.p.key.toString().padEnd(padding)}`
    + `${ds.rank.toString().padEnd(padding)}`
    );
}


// ----- GRAPH ALGORITHMS ----- //
console.log('\n\n|----- GRAPH ALGORITHMS ----|');

// CLRS Section 22.2 - Breadth-First Search
const { UnweightedGraph, GraphVertexBFS } = require('./utilities');
const { BFS } = require('./graph-algorithms/p595_BFS');

console.log('\nSection 22.2 - Breadth-First Search');

let G = new UnweightedGraph();
G.addUndirectedEdge(new GraphVertexBFS('v'), new GraphVertexBFS('r')); // cf. Figure 22.3, p. 596
G.addUndirectedEdge(G.V['r'], new GraphVertexBFS('s'));
G.addUndirectedEdge(G.V['s'], new GraphVertexBFS('w'));
G.addUndirectedEdge(G.V['w'], new GraphVertexBFS('t'));
G.addUndirectedEdge(G.V['w'], new GraphVertexBFS('x'));
G.addUndirectedEdge(G.V['x'], G.V['t']);
G.addUndirectedEdge(G.V['x'], new GraphVertexBFS('u'));
G.addUndirectedEdge(G.V['x'], new GraphVertexBFS('y'));
G.addUndirectedEdge(G.V['u'], G.V['t']);
G.addUndirectedEdge(G.V['u'], G.V['y']);

console.log('\nInitial undirected graph:\n');
console.log(
    `r - s   t - u`
+ `\n|   | / | / |`
+ `\nv   w - x - y`
);

BFS(G.V, G.V['s']);

let d = {};
for(let v in G.V) {
    d[v] = G.V[v].d;
}
console.log(`\nBreadth-first tree after calling BFS(G, 's'):\n`);
console.log(
    `r,${d['r']} - s,${d['s']}   t,${d['t']} - u,${d['u']}`
+ `\n|     |   /`
+ `\nv,${d['v']}   w,${d['w']} - x,${d['x']} - y,${d['y']}`
);

// CLRS Section 22.3 - Depth-First Search
const { GraphVertexDFS } = require('./utilities');
const { DFS } = require('./graph-algorithms/p604_DFS');

console.log('\nSection 22.3 - Depth-First Search');

G = new UnweightedGraph();
G.addDirectedEdge(new GraphVertexDFS('u'), new GraphVertexDFS('v')); // cf. Figure 22.4, p. 605
G.addDirectedEdge(G.V['v'], new GraphVertexDFS('y'));
G.addDirectedEdge(G.V['y'], new GraphVertexDFS('x'));
G.addDirectedEdge(G.V['u'], G.V['x']);
G.addDirectedEdge(G.V['x'], G.V['v']);
G.addDirectedEdge(new GraphVertexDFS('w'), new GraphVertexDFS('z'))
G.addDirectedEdge(G.V['w'], G.V['y']);
G.addDirectedEdge(G.V['z'], G.V['z']);

const arrows = {
    u: '\u2b61',
    d: '\u2b63',
    r: '\u2b62',
    l: '\u2b60',
    ur: '\u2b67',
    dr: '\u2b68',
    ul: '\u2b66',
    dl: '\u2b69',
    cw: '\u27f3',
    ccw: '\u27f2'
}

console.log('\nInitial directed graph:\n');
console.log(
    `u ${arrows.r} v   w`
+ `\n${arrows.d} ${arrows.ur} ${arrows.d} ${arrows.dl} ${arrows.d}`
+ `\nx ${arrows.l} y   z${arrows.ccw}`
);

let dfs = new DFS();
dfs.DFS(G.V);

d = {}, f = {};
for(let v in G.V) {
    d[v] = G.V[v].d;
    f[v] = G.V[v].f;
}
console.log(`\nDepth-first forest after calling DFS(G):\n`);
console.log(
    `u|${d['u']},${f['u']} ${arrows.r} v|${d['v']},${f['v']}   w|${d['w']},${f['w']}`
+ `\n        ${arrows.d}       ${arrows.d}`
+ `\nx|${d['x']},${f['x']} ${arrows.l} y|${d['y']},${f['y']}   z|${d['z']},${f['z']}`
);

// CLRS Section 23.2 - Kruskal's Algorithm (Minimum Spanning Tree)
const { GraphVertexMST, WeightedGraph } = require('./utilities');
const { KruskalMST } = require('./graph-algorithms/p631_Kruskal');

console.log('\nSection 23.2 - Kruskal\'s Algorithm (Minimum Spanning Tree)');

G = new WeightedGraph();

G.addUndirectedEdge(new GraphVertexMST('a'), new GraphVertexMST('b'), 4); // cf. Figure 23.4, p. 632
G.addUndirectedEdge(new GraphVertexMST('h'), G.V['a'], 8);
G.addUndirectedEdge(G.V['b'], G.V['h'], 11);
G.addUndirectedEdge(new GraphVertexMST('i'), new GraphVertexMST('c'), 2);
G.addUndirectedEdge(G.V['i'], new GraphVertexMST('g'), 6);
G.addUndirectedEdge(G.V['b'], G.V['c'], 8);
G.addUndirectedEdge(G.V['i'], G.V['h'], 7);
G.addUndirectedEdge(G.V['g'], G.V['h'], 1);
G.addUndirectedEdge(new GraphVertexMST('d'), new GraphVertexMST('e'), 9);
G.addUndirectedEdge(new GraphVertexMST('f'), G.V['c'], 4);
G.addUndirectedEdge(G.V['f'], G.V['g'], 2);
G.addUndirectedEdge(G.V['c'], G.V['d'], 7);
G.addUndirectedEdge(G.V['f'], G.V['d'], 14);
G.addUndirectedEdge(G.V['f'], G.V['e'], 10);


console.log('\nInitial undirected weighted graph:\n');
console.log(
    `      b  -8-  c -7- d`
+ `\n  4/  |    /2   \\   |  \\9`
+ `\na   11|   i      \\4 |14   e`
+ `\n  8\\  | 7/ \\6     \\ |  /10`
+ `\n      h  -1-  g -2- f`
);

let mst = KruskalMST(G);
console.log(`\nMinimum-spanning tree after calling Kruskal(G), with minimized total weight of ${mst.totalWeight}:\n`);
console.log('edge   | weight');
console.log('-------|-------');
for(edge of mst.edgesMST) {
    const vertices = edge.vertices;
    console.log(`(${vertices.u.name}, ${vertices.v.name}) | ${edge.weight}`);
}
console.log();
console.log(
    `      b     c -7- d`
+ `\n  4/      /2  \\     \\9`
+ `\na        i     \\4     e`
+ `\n  8\\            \\`
+ `\n      h -1- g -2- f`
);

// CLRS Section 23.3 - Prim's Algorithm (Minimum Spanning Tree)
const { GraphVertexPrim } = require('./utilities');
const { PrimMST } = require('./graph-algorithms/p634_Prim');

console.log('\nSection 23.3 - Prim\'s Algorithm (Minimum Spanning Tree)');

G = new WeightedGraph();

G.addUndirectedEdge(new GraphVertexPrim('a'), new GraphVertexPrim('b'), 4); // cf. Figure 23.5, p. 635
G.addUndirectedEdge(new GraphVertexPrim('h'), G.V['a'], 8);
G.addUndirectedEdge(G.V['b'], G.V['h'], 11);
G.addUndirectedEdge(new GraphVertexPrim('i'), new GraphVertexPrim('c'), 2);
G.addUndirectedEdge(G.V['i'], new GraphVertexPrim('g'), 6);
G.addUndirectedEdge(G.V['b'], G.V['c'], 8);
G.addUndirectedEdge(G.V['i'], G.V['h'], 7);
G.addUndirectedEdge(G.V['g'], G.V['h'], 1);
G.addUndirectedEdge(new GraphVertexPrim('d'), new GraphVertexPrim('e'), 9);
G.addUndirectedEdge(new GraphVertexPrim('f'), G.V['c'], 4);
G.addUndirectedEdge(G.V['f'], G.V['g'], 2);
G.addUndirectedEdge(G.V['c'], G.V['d'], 7);
G.addUndirectedEdge(G.V['f'], G.V['d'], 14);
G.addUndirectedEdge(G.V['f'], G.V['e'], 10);

console.log('\nInitial undirected weighted graph:\n');
console.log(
    `      b  -8-  c -7- d`
+ `\n  4/  |    /2   \\   |  \\9`
+ `\na   11|   i      \\4 |14   e`
+ `\n  8\\  | 7/ \\6     \\ |  /10`
+ `\n      h  -1-  g -2- f`
);

mst = PrimMST(G, G.V['a'])
let totalWeight = 0;
for(let v in G.V) {
    totalWeight += G.V[v].key;
}
console.log(`\nMinimum-spanning tree after calling Prim(G, 'a'), with minimized total weight of ${totalWeight}:\n`);
console.log('v  | v.pi | v.key ');
console.log('---|------|-------');
for(let v in G.V) {
    (v !== 'a') 
    ? console.log(`${G.V[v].name}    ${G.V[v].pi.name}      ${G.V[v].key}`)
    : console.log(`${G.V[v].name}    ${' '}      ${G.V[v].key}`);
}
console.log();
console.log(
    `    b,${G.V['b'].key}     c,${G.V['c'].key}  ${arrows.l}${arrows.l}${arrows.l}  d,${G.V['d'].key}`
+ `\n   ${arrows.dl}       ${arrows.ur}    ${arrows.dr}        ${arrows.ul}`
+ `\na,${G.V['a'].key}    i,${G.V['i'].key}        ${arrows.dr}        e,${G.V['e'].key}`
+ `\n   ${arrows.ul}                ${arrows.dr}`
+ `\n    h,${G.V['h'].key} ${arrows.l}${arrows.l}${arrows.l} g,${G.V['g'].key}  ${arrows.l}${arrows.l}${arrows.l}  f,${G.V['f'].key}`
);

// CLRS Section 24.1 - Bellman-Ford Algorithm (Single-Source Shortest Path)
const { GraphVertexSSSP } = require('./utilities');
const { bellmanFord } = require('./graph-algorithms/p651_BellmanFord');

console.log('\nSection 24.1 - Bellman-Ford Algorithm (Single-Source Shortest Path)');

G = new WeightedGraph();

G.addDirectedEdge(new GraphVertexSSSP('s'), new GraphVertexSSSP('y'), 7); // cf. Figure 24.4, p. 652
G.addDirectedEdge(G.V['s'], new GraphVertexSSSP('t'), 6);
G.addDirectedEdge(G.V['t'], new GraphVertexSSSP('x'), 5);
G.addDirectedEdge(G.V['t'], G.V['y'], 8);
G.addDirectedEdge(G.V['t'], new GraphVertexSSSP('z'), -4);
G.addDirectedEdge(G.V['x'], G.V['t'], -2);
G.addDirectedEdge(G.V['y'], G.V['x'], -3);
G.addDirectedEdge(G.V['y'], G.V['z'], 9);
G.addDirectedEdge(G.V['z'], G.V['x'], 7);
G.addDirectedEdge(G.V['z'], G.V['s'], 2);

console.log('\nInitial directed weighted graph:\n');
console.log(
    `     t -2${arrows.l.repeat(2)}|${arrows.r.repeat(2)}5 x`
+ `\n  6${arrows.ur} ${arrows.d}  ${arrows.dr}     ${arrows.ur} ${arrows.u}`
+ `\ns    8   -4 -3  7`
+ `\n  7${arrows.dr} ${arrows.d}    ${arrows.ur} ${arrows.dr}   ${arrows.u}`
+ `\n     y    ${arrows.r}9${arrows.r}   z`
+ `\n(not pictured: s2${arrows.ul}z)`
);

let isReachable = bellmanFord(G, G.V['s']);
console.log('\nSingle-source shortest path:\n');
console.log(
    `     t,${G.V['t'].d}  ${arrows.l}-2${arrows.l}  x,${G.V['x'].d}`
+ `\n        ${arrows.dr}     ${arrows.ur}`
+ `\ns,${G.V['s'].d}     -4 -3`
+ `\n  7${arrows.dr}      ${arrows.ur} ${arrows.dr}`
+ `\n     y,${G.V['y'].d}        z,${G.V['z'].d}`
);
console.log(`\nThere is a negative-weight cycle that is reachable from the source: ${isReachable}`);

// for(let v in G.V) {
//     console.log(G.V[v]);
// }

// TO-DO: tweak for Dijkstra
// G.addDirectedEdge(new GraphVertexSSSP('s'), new GraphVertexSSSP('y'), 5); // cf. Figure 24.2
// G.addDirectedEdge(G.V['s'], new GraphVertexSSSP('t'), 3);
// G.addDirectedEdge(G.V['t'], new GraphVertexSSSP('x'), 6);
// G.addDirectedEdge(G.V['t'], G.V['y'], 2);
// G.addDirectedEdge(G.V['y'], G.V['t'], 1);
// G.addDirectedEdge(G.V['y'], G.V['x'], 4);
// G.addDirectedEdge(G.V['y'], new GraphVertexSSSP('z'), 6);
// G.addDirectedEdge(G.V['z'], G.V['x'], 7);
// G.addDirectedEdge(G.V['x'], G.V['z'], 2);
// G.addDirectedEdge(G.V['z'], G.V['s'], 3);
// // console.log(G);
