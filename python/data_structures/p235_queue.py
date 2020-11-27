'''
    CLRS Section 10.1, p. 235 & Exercise 10.1-4, p. 235
'''

class Queue:
    def __init__(self, Q=None, head=0, tail=0):
        if Q is None:
            self.Q = []
        else:
            self.Q = Q
        self.head = head
        self.tail = tail
    
    def queue_empty(self):
        return self.head == self.tail
    
    def queue_full(self):
        return (self.head == self.tail + 1) \
            or (self.head == 0 and self.tail == len(self.Q) - 1)

    def enqueue(self, x):
        if self.queue_full():
            raise Exception('overflow')
        else:
            self.Q[self.tail] = x
            if self.tail == len(self.Q) - 1:
                self.tail = 0
            else:
                self.tail += 1
    
    def dequeue(self):
        if self.queue_empty():
            raise Exception('underflow')
        else:
            x = self.Q[self.head]
            self.Q[self.head] = None
            if self.head == len(self.Q) - 1:
                self.head = 0
            else:
                self.head += 1
            return x
