'''
    This application demonstrates the use of data structures and
    algorithms in the console
'''

# import utilities (ADTs)
from utilities import A

# ----- SORTING ALGORITMS ----- #
print('\n|----- SORTING ALGORITHMS ----|')

# CLRS Section 2.1 - Insertion Sort
from sorting.p018_insertion_sort import insertion_sort
A = []

print('\nSection 2.1 - Insertion Sort')

A = [5, 2, 4, 6, 1, 3] # cf. Figure 2.2, p. 18
insertion_sort(A)
print('\nsorted:', A)
