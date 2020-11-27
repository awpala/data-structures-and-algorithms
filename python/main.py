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

A = [31, 41, 59, 26, 41, 58] # cf. Exercise 2.1-1, p. 22
insertion_sort(A)
print('\nsorted:', A)

# CLRS Section 2.3 - Merge Sort
from sorting.p034_merge_sort import merge_sort
A = []

print('\nSection 2.3 - Merge Sort')

A = [2, 4, 5, 7, 1, 2, 3, 6] # cf. Figure 2.3, p. 32
merge_sort(A, 0, len(A)-1)
print('\nsorted:', A)

A = [3, 41, 52, 26, 38, 57, 9, 49] # cf. Exercise 2.3-1, p. 37
merge_sort(A, 0, len(A)-1)
print('\nsorted:', A)

# CLRS Chapter 2 Problems - Bubble Sort
from sorting.p040_bubble_sort import bubble_sort

print('\nProblem 2-2 - Bubble Sort')

A = [3, 41, 52, 26, 38, 57, 9, 49] # cf. Exercise 2.3-1, p. 37
bubble_sort(A)
print('\nsorted:', A)

# CLRS Section 6.4 - Heapsort
from sorting.p160_heapsort import heapsort
A = []

print('\nSection 6.4 - Heapsort')

A = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1] # cf. Figure 6.4, p. 161
heapsort(A)
print('\nsorted:', A)
