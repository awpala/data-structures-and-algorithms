'''
    CLRS Exercise 6.5-3, p. 165
'''

from .p156_min_heap import MinHeap
import math

class MinPQ(MinHeap):
    def __init__(self, A, heap_size):
        super().__init__(A, heap_size)
    
    def heap_minimum(self):
        return self.A[0]
    
    def heap_extract_min(self):
        if self.heap_size < 1:
            raise Exception('heap underflow')
        min = self.heap_minimum()
        self.A[0] = self.A.pop()
        self.heap_size -= 1
        self.min_heapify(0)
        return min
    
    def heap_decrease_key(self, i, key):
        if key > self.A[i]:
            raise Exception('new key is larger than current key')
        self.A[i] = key
        while i > 0 and self.A[self.parent(i)] > self.A[i]:
            self.A[i], self.A[self.parent(i)] = self.A[self.parent(i)], self.A[i]
            i = self.parent(i)
    
    def min_heap_insert(self, key):
        self.heap_size += 1
        self.A.append(math.inf)
        self.heap_decrease_key(self.heap_size - 1, key)
    
    # N.B. cf. Exercise 6.5-8, p. 166
    def heap_delete(self, i):
        pass # TO-DO
