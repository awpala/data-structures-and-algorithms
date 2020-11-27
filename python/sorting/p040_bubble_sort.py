'''
    CLRS Chapter 2 Problem 2-2, p. 40
'''

def bubble_sort(A):
    for i in range(0, len(A)):
        for j in range(len(A)-1, i, -1):
            if A[j] < A[j - 1]:
                A[j], A[j - 1] = A[j - 1], A[j]
