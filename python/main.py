'''
    This application demonstrates the use of data structures and
    algorithms in the console
'''

# import utilities (ADTs)
from utilities import A

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
