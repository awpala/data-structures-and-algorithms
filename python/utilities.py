'''
    This file contains abstract data types (ADTs) used as
    auxiliary data structures in the main data structures
    and algorithms
'''

# ----- ABSTRACT DATA TYPES (ADTs) ----- #

# A is a list ADT, represented by a Python list
A = []

class ListNode:
    def __init__(self, key, prev=None, next=None):
        self.key = key
        self.prev = prev
        self.next = next
