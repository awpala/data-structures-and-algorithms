'''
    CLRS Section 6.4, p. 160
'''

from data_structures.p157_max_heap import MaxHeap

def heapsort(A):
    max_heap = MaxHeap(A, len(A))
    max_heap.build_max_heap()
    for i in range(len(A)-1, 0, -1):
        A[0], A[i] = A[i], A[0]
        max_heap.heap_size -= 1
        max_heap.max_heapify(0)
