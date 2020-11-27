'''
    CLRS Section 2.1, p. 18
'''

def insertion_sort(A):
    for j in range(1, len(A)):
        key = A[j]
        # insert A[j] into the sorted seuqence A[0]...A[j-1]
        i = j - 1
        while i >= 0 and A[i] > key:
            A[i + 1] = A[i]
            i -= 1
        A[i + 1] = key