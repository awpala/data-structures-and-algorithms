'''
    CLRS Section 10.2, p. 238
'''

class LinkedList:
    def __init__(self, head=None):
        self.head = head
    
    def list_search(self, k):
        x = self.head
        while x is not None and x.key != k:
            x = x.next
        return x
    
    def list_insert(self, x):
        x.next = self.head
        if self.head is not None:
            self.head.prev = x
        self.head = x
        x.prev = None
    
    def list_delete(self, x):
        if x.prev is not None:
            x.prev.next = x.next
        else:
            self.head = x.next
        if x.next is not None:
            x.next.prev = x.prev
