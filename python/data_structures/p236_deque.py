'''
    CLRS Exercise 10.1-5, p. 236
'''

class Deque:
    def __init__(self, Q=None, head=0, tail=0):
        if Q is None:
            Q = []
        else:
            self.Q = Q
        self.head = head
        self.tail = tail

    def deque_empty(self):
        return self.head == self.tail
    
    def deque_full(self):
        return (self.head == self.tail + 1) \
            or (self.head == 0 and self.tail == len(self.Q) - 1)
    
    def head_enqueue(self, x):
        if self.deque_full():
            raise Exception('overflow')
        else:
            if self.head == 0:
                self.head = len(self.Q) - 1
            else:
                self.head -= 1
            self.Q[self.head] = x
    
    def tail_enqueue(self, x):
        if self.deque_full():
            raise Exception('overflow')
        else:
            self.Q[self.tail] = x
            if self.tail == len(self.Q) - 1:
                self.tail = 0
            else:
                self.tail += 1
    
    def head_dequeue(self):
        if self.deque_empty():
            raise Exception('underflow')
        else:
            x = self.Q[self.head]; self.Q[self.head] = None
            if self.head == len(self.Q) - 1:
                self.head = 0
            else:
                self.head += 1
            return x
    
    def tail_dequeue(self):
        if self.deque_empty():
            raise Exception('underflow')
        else:
            if self.tail == 0:
                self.tail = len(self.Q) - 1
            else:
                self.tail -= 1
                self.Q.insert(self.tail, None)
                return self.Q.pop(self.tail + 1)
