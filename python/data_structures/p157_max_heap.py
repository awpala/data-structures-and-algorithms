'''
    CLRS Section 6.3, p. 157
'''

class MaxHeap:
    def __init__(self, A=None, heap_size = 0):
        if A is None:
            self.A = []
        else:
            self.A = A
        self.heap_size = heap_size
    
    def parent(self, i):
        return (i - 1) // 2
    
    def left(self, i):
        return 2 * i + 1
    
    def right(self, i):
        return 2 * i + 2
    
    def max_heapify(self, i):
        l = self.left(i)
        r = self.right(i)
        largest = None
        if l < self.heap_size and self.A[l] > self.A[i]:
            largest = l
        else:
            largest = i
        if r < self.heap_size and self.A[r] > self.A[largest]:
            largest = r
        if largest != i:
            self.A[i], self.A[largest] = self.A[largest], self.A[i]
            self.max_heapify(largest)

    def build_max_heap(self):
        self.heap_size = len(self.A)
        for i in range((len(self.A) - 1)//2, -1, -1):
            self.max_heapify(i)
