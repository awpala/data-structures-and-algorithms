'''
    This application demonstrates the use of data structures and
    algorithms in the console
'''

# import utilities (ADTs)
from utilities import A, ListNode

# ----- SORTING ALGORITMS ----- #
print('\n|----- SORTING ALGORITHMS ----|')

# CLRS Section 2.1 - Insertion Sort
from sorting.p018_insertion_sort import insertion_sort
A = []

print('\nSection 2.1 - Insertion Sort')

A = [5, 2, 4, 6, 1, 3] # cf. Figure 2.2, p. 18
insertion_sort(A)
print('\nsorted:', A)

A = [31, 41, 59, 26, 41, 58] # cf. Exercise 2.1-1, p. 22
insertion_sort(A)
print('\nsorted:', A)

# CLRS Section 2.3 - Merge Sort
from sorting.p034_merge_sort import merge_sort
A = []

print('\nSection 2.3 - Merge Sort')

A = [2, 4, 5, 7, 1, 2, 3, 6] # cf. Figure 2.3, p. 32
merge_sort(A, 0, len(A)-1)
print('\nsorted:', A)

A = [3, 41, 52, 26, 38, 57, 9, 49] # cf. Exercise 2.3-1, p. 37
merge_sort(A, 0, len(A)-1)
print('\nsorted:', A)

# CLRS Chapter 2 Problems - Bubble Sort
from sorting.p040_bubble_sort import bubble_sort

print('\nProblem 2-2 - Bubble Sort')

A = [3, 41, 52, 26, 38, 57, 9, 49] # cf. Exercise 2.3-1, p. 37
bubble_sort(A)
print('\nsorted:', A)

# CLRS Section 6.4 - Heapsort
from sorting.p160_heapsort import heapsort
A = []

print('\nSection 6.4 - Heapsort')

A = [13, 14, 10, 8, 7, 9, 3, 2, 4, 1] # cf. Figure 6.4, p. 161
heapsort(A)
print('\nsorted:', A)

# CLRS Section 7.1 - Quicksort
from sorting.p171_quicksort import quicksort
A = []

print('\nSection 7.1 - Quicksort')

A = [2, 8, 7, 1, 3, 5, 6, 4]; # cf. Figure 7.1, p. 172
quicksort(A, 0, len(A)-1)
print('\nsorted:', A)

A = [13, 19, 9, 5, 12, 8, 7, 4, 21, 2, 6, 11] # cf. Exercise 7.1-1, p. 173
quicksort(A, 0, len(A)-1)
print('\nsorted:', A)

# CLRS Section 8.2 - Counting Sort
from sorting.p191_counting_sort import counting_sort
A = []
B = []

print('\nSection 8.2 - Counting Sort')

A = [2, 5, 3, 0, 2, 3, 0, 3] # cf. Figure 8.2, p. 195
B = [None for element in range(0, len(A))]
counting_sort(A, B, max(A)) # N.B. k = 5
print('\nsorted:', B)


# ----- DATA STRUCTURES ----- #
print('\n\n|----- DATA STRUCTURES ----|')

# CLRS Section 6.3 - Max-Heap
from data_structures.p157_max_heap import MaxHeap
A = []

print('\nSection 6.3 - Max-Heap')

A = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1] # cf. Figure 6.2, p. 152
max_heap = MaxHeap(A, len(A))
max_heap.max_heapify(1)
print('\nafter max_heapify:', max_heap.A)

A = [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0] # cf. Exercise 6.2-1, p. 156
max_heap = MaxHeap(A, len(A))
max_heap.max_heapify(2)
print('\nafter max_heapify:', max_heap.A)

A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7] # cf. Figure 6.3, p. 158
max_heap = MaxHeap(A, len(A))
max_heap.build_max_heap()
print('\nafter build_max_heap:', max_heap.A)

A = [5, 3, 17, 10, 84, 19, 6, 22, 9]; # cf. Exercise 6.3-1, p. 159
max_heap = MaxHeap(A, len(A))
max_heap.build_max_heap()
print('\nafter build_max_heap:', max_heap.A)

# CLRS Section 6.3 - Min-Heap
from data_structures.p156_min_heap import MinHeap
A = []

print('\nSection 6.3 - Min-Heap')

A = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7] # cf. Figure 6.3, p. 158
min_heap = MinHeap(A, len(A))
min_heap.build_min_heap()
print('\nafter build_min_heap:', min_heap.A)

A = [5, 3, 17, 10, 84, 19, 6, 22, 9]; # cf. Exercise 6.3-1, p. 159
min_heap = MinHeap(A, len(A))
min_heap.build_min_heap()
print('\nafter build_min_heap:', min_heap.A)

# CLRS Section 6.5 - Max Priority Queue
from data_structures.p164_max_pq import MaxPQ
A = []

print('\nSection 6.5 - Max Priority Queue')

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] # cf. Figure 6.5, p. 164
max_pq = MaxPQ(A, len(A))
max_pq.build_max_heap()
print('\nafter build_max_heap:', max_pq.A)
max_pq.heap_increase_key(8, 15)
print('after heap_increase_key(4 -> 15):', max_pq.A)

A = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1] # cf. Exercise 6.5-2, p. 165
max_pq = MaxPQ(A, len(A))
max_pq.build_max_heap()
print('\nafter build_max_heap:', max_pq.A)
max_pq.max_heap_insert(10)
print('after max_heap_insert(10):', max_pq.A)

# TO-DO: fix heap_delete

# CLRS Section 6.5 Exercises - Min Priority Queue
from data_structures.p165_min_pq import MinPQ
A = []

print('\nExercise 6.5-3 - Min Priority Queue')

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] # cf. Figure 6.5, p. 164
min_pq = MinPQ(A, len(A))
min_pq.build_min_heap()
print('\nafter build_min_heap:', min_pq.A)
min_pq.heap_decrease_key(5, 2)
print('after heap_decrease_key(9 -> 2):', min_pq.A)

A = [15, 13, 9, 5, 12, 8, 7, 4, 0, 6, 2, 1] # cf. Exercise 6.5-2, p. 165
min_pq = MinPQ(A, len(A))
min_pq.build_min_heap()
print('\nafter build_min_heap:', min_pq.A)
min_pq.min_heap_insert(6)
print('after min_heap_insert(6):', min_pq.A)

# CLRS Section 10.1 - Stack
from data_structures.p233_stack import Stack

print('\nSection 10.1 - Stack')

S = Stack([15, 6, 2, 9, None, None, None], 3) # cf. Figure 10.1, p. 233
S.push(17)
S.push(3)
print('\nafter push(17), push(3):', S.S)
S.pop()
print('after pop():', S.S)

S = Stack([None for elements in range(0, 6)]) # cf. Exercise 10.1-1, p. 235
S.push(4)
S.push(1)
S.push(3)
print('\nafter push(4), push(1), push(3):', S.S)
S.pop()
S.push(8)
print('after pop(), push(8):', S.S)
S.pop()
print('after pop():', S.S)

# CLRS Section 10.1 - Queue
from data_structures.p235_queue import Queue

print('\nSection 10.1 - Queue')

Q = Queue([None, None, None, None, None, None, 15, 6, 9, 8, 4, None], 6, 11) # cf. Figure 10.2, p. 234
Q.enqueue(17)
Q.enqueue(3)
Q.enqueue(5)
print('\nafter enqueue(17), enqueue(3), enqueue(5):', Q.Q)
Q.dequeue()
print('after dequeue():', Q.Q)

Q = Queue([None for elements in range(0, 6)]) # cf. Exercise 10.1-3, p. 235
Q.enqueue(4)
Q.enqueue(1)
Q.enqueue(3)
print('\nafter enqueue(4), enqueue(1), enqueue(3):', Q.Q)
Q.dequeue()
print('after dequeue():', Q.Q)
Q.enqueue(8)
Q.dequeue()
print('after enqueue(8), dequeue():', Q.Q)

# CLRS Section 10.1 Exercises - Deque
from data_structures.p236_deque import Deque

print('\nExercise 10.1-5 - Deque')

Q = Deque([None for element in range(0, 6)]) # cf. Exercise 10.1-3, p. 235
Q.tail_enqueue(4)
Q.tail_enqueue(1)
Q.tail_enqueue(3)
print('\nafter tail_enqueue(4), tail_enqueue(1), tail_enqueue(3):', Q.Q)
Q.head_dequeue()
print('after head_dequeue():', Q.Q)
Q.head_enqueue(8)
print('after head_enqueue(8):', Q.Q)
Q.tail_dequeue()
print('after tail_dequeue():', Q.Q)

# CLRS Section 10.2 - Linked List
from data_structures.p238_linked_list import LinkedList

print('\nSection 10.2 - Linked List')

L = LinkedList()
L.list_insert(ListNode(1))
L.list_insert(ListNode(4))
L.list_insert(ListNode(16))
L.list_insert(ListNode(9)) # cf. Figure 10.3, p. 237
L.list_insert(ListNode(25))
print('\nafter list_insert(25):'
    , L.head.key, '->'
    , L.head.next.key, '->'
    , L.head.next.next.key, '->'
    , L.head.next.next.next.key, '->'
    , L.head.next.next.next.next.key, '->'
    , L.head.next.next.next.next.next
)
delete_node = L.list_search(4)
L.list_delete(delete_node)
print('after list_delete(4):'
    , L.head.key, '->'
    , L.head.next.key, '->'
    , L.head.next.next.key, '->'
    , L.head.next.next.next.key, '->'
    , L.head.next.next.next.next
)

# CLRS Section 10.2 - Circular Linked List
from data_structures.p240_circular_ll import CircularLL

print('\nSection 10.2 - Circular Linked List')

L = CircularLL()
L.list_insert(ListNode(1))
L.list_insert(ListNode(4))
L.list_insert(ListNode(16))
L.list_insert(ListNode(9)) # cf. Figure 10.4, p. 239
L.list_insert(ListNode(25))
print('\nafter list_insert(25):'
    , L.nil.next.key, '->'
    , L.nil.next.next.key, '->'
    , L.nil.next.next.next.key, '->'
    , L.nil.next.next.next.next.key, '->'
    , L.nil.next.next.next.next.next.key, '->'
    , L.nil.next.next.next.next.next.next.key
)
delete_node = L.list_search(1)
L.list_delete(delete_node)
print('after list_delete(1):'
, L.nil.next.key, '->'
, L.nil.next.next.key, '->'
, L.nil.next.next.next.key, '->'
, L.nil.next.next.next.next.key, '->'
, L.nil.next.next.next.next.next.key
)

# CLRS Section 11.2 - Hash Table with Chaining
from data_structures.p258_hash_table_chaining import HashTableChaining

print('\nSection 11.2 - Hash Table with Chaining')

T = HashTableChaining(9) # cf. Exercise 11.2-2, p. 261
T.chained_hash_insert(ListNode(5))
T.chained_hash_insert(ListNode(28))
T.chained_hash_insert(ListNode(19))
T.chained_hash_insert(ListNode(15))
T.chained_hash_insert(ListNode(20))
T.chained_hash_insert(ListNode(33))
T.chained_hash_insert(ListNode(12))
T.chained_hash_insert(ListNode(17))
T.chained_hash_insert(ListNode(10))
print('\nafter chained_hash_insert\'s:')
for i in range(0, len(T.T)):
    if T.T[i].head is None:
        print(f'{i}: {T.T[i].head}')
    else:
        str = f'{i}: '
        pointer = T.T[i].head
        while pointer is not None:
            str += f'{pointer.key} -> '
            pointer = pointer.next
        str += 'None'
        print(str)
delete_node = T.chained_hash_search(19)
T.chained_hash_delete(delete_node)
print('after chained_hash_delete(19):')
for i in range(0, len(T.T)):
    if T.T[i].head is None:
        print(f'{i}: {T.T[i].head}')
    else:
        str = f'{i}: '
        pointer = T.T[i].head
        while pointer is not None:
            str += f'{pointer.key} -> '
            pointer = pointer.next
        str += 'None'
        print(str)

# CLRS Section 11.4 - Hash Table with Probing
from data_structures.p271_hash_table_probing import HashTableProbing

print('\nSection 11.4 - Hash Table with Probing')

T = HashTableProbing(9, 'lp') # cf. Exercise 11.4-1, p. 277
T.hash_insert(10)
T.hash_insert(22)
T.hash_insert(31)
T.hash_insert(4)
T.hash_insert(15)
T.hash_insert(28)
T.hash_insert(17)
T.hash_insert(88)
T.hash_insert(59)
print(f'\nafter hash_insert\'s with linear probing, with {T.collisions_ins} total collisions:', T.T)
T.hash_search(59)
print(f'hash_search(59) with linear probing makes {T.collisions_srch} collisions')
T.hash_delete(4)
print(f'after hash_delete(4) with linear probing, with {T.collisions_del} total collisions:', T.T)

T = HashTableProbing(9, 'qp')
T.hash_insert(10)
T.hash_insert(22)
T.hash_insert(31)
T.hash_insert(4)
T.hash_insert(15)
T.hash_insert(28)
T.hash_insert(17)
T.hash_insert(88)
T.hash_insert(59)
print(f'\nafter hash_insert\'s with quadratic probing, with {T.collisions_ins} total collisions:', T.T)
T.hash_search(59)
print(f'hash_search(59) with quadratic probing makes {T.collisions_srch} collisions')
T.hash_delete(4)
print(f'after hash_delete(4) with quadratic probing, with {T.collisions_del} total collisions:', T.T)

T = HashTableProbing(9, 'dh')
T.hash_insert(10)
T.hash_insert(22)
T.hash_insert(31)
T.hash_insert(4)
T.hash_insert(15)
T.hash_insert(28)
T.hash_insert(17)
T.hash_insert(88)
T.hash_insert(59)
print(f'\nafter hash_insert\'s with double hashing, with {T.collisions_ins} total collisions:', T.T)
T.hash_search(59)
print(f'hash_search(59) with double hashing makes {T.collisions_srch} collisions')
T.hash_delete(4)
print(f'after hash_delete(4) with double hashing, with {T.collisions_del} total collisions:', T.T)

print(
    '\nSummary of operations for hash table with probing (total collisions):'
    ,'\n|----------------------|---------------|-----------------|----------------|'
    ,'\n| Collision Resolution | hash_insert\'s | hash_search(59) | hash_delete(4) |'
    ,'\n|----------------------|---------------|-----------------|----------------|'
    ,'\n| Linear Probing       | 14            | 7               | 2              |'
    ,'\n| Quadratic Probing    | 11            | 6               | 2              |'
    ,'\n| Double Hashing       | 4             | 0               | 1              |'
)
