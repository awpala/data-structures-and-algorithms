'''
    CLRS Section 11.2, p. 258
'''

from .p238_linked_list import LinkedList

class HashTableChaining:
    def __init__(self, m=0):
        self.m = m
        self.T = [LinkedList() for element in range(0, m + 1)]

    def h(self, k):
        return k % self.m # cf. Exercise 11.2-2, p. 261
    
    def chained_hash_insert(self, x):
        self.T[self.h(x.key)].list_insert(x)
    
    def chained_hash_search(self, k):
        return self.T[self.h(k)].list_search(k)
    
    def chained_hash_delete(self, x):
        self.T[self.h(x.key)].list_delete(x)
