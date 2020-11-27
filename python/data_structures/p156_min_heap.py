'''
    CLRS Chapter 6 Exercise 6.2-2, p. 156
'''

class MinHeap:
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
    
    def min_heapify(self, i):
        l = self.left(i)
        r = self.right(i)
        smallest = None
        if l < self.heap_size and self.A[l] < self.A[i]:
            smallest = l
        else:
            smallest = i
        if r < self.heap_size and self.A[r] < self.A[smallest]:
            smallest = r
        if smallest != i:
            self.A[i], self.A[smallest] = self.A[smallest], self.A[i]
            self.min_heapify(smallest)

    def build_min_heap(self):
        self.heap_size = len(self.A)
        for i in range((len(self.A) - 1)//2, -1, -1):
            self.min_heapify(i)
