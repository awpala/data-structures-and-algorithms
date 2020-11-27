'''
    CLRS Section 6.5, p. 164
'''

from .p157_max_heap import MaxHeap
import math

class MaxPQ(MaxHeap):
    def __init__(self, A, heap_size):
        super().__init__(A, heap_size)
    
    def heap_maximum(self):
        return self.A[0]
    
    def heap_extract_max(self):
        if self.heap_size < 1:
            raise Exception('heap underflow')
        max = self.heap_maximum()
        self.A[0] = self.A.pop()
        self.heap_size -= 1
        self.max_heapify(0)
        return max
    
    def heap_increase_key(self, i, key):
        if key < self.A[i]:
            raise Exception('new key is smaller than current key')
        self.A[i] = key
        while i > 0 and self.A[self.parent(i)] < self.A[i]:
            self.A[i], self.A[self.parent(i)] = self.A[self.parent(i)], self.A[i]
            i = self.parent(i)
    
    def max_heap_insert(self, key):
        self.heap_size += 1
        self.A.append(-math.inf)
        self.heap_increase_key(self.heap_size - 1, key)
    
    # N.B. cf. Exercise 6.5-8, p. 166
    def heap_delete(self, i):
        pass # TO-DO
