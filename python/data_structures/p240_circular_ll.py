'''
    CLRS Section 10.2, p. 240
'''

from utilities import ListNode

class CircularLL:
    def __init__(self):
        sentinel = ListNode(None)
        sentinel.next = sentinel
        sentinel.prev = sentinel

        self.nil = sentinel
    
    def list_search(self, k):
        x = self.nil.next
        while x is not None and x.key != k:
            x = x.next
        return x
    
    def list_insert(self, x):
        x.next = self.nil.next
        self.nil.next.prev = x
        self.nil.next = x
        x.prev = self.nil
    
    def list_delete(self, x):
        x.prev.next = x.next
        x.next.prev = x.prev
