'''
    CLRS Section 11.4, p. 271 and Exercise 11.4-1, p. 277
'''

class HashTableProbing:
    def __init__(self, m=0, col_res='lp'):
        self.m = m
        self.col_res = col_res
        self.T = [None for element in range(0, m)]
        self.collisions_ins = 0
        self.collisions_srch = 0
        self.collisions_del = 0

    # auxiliary hash functions (cf. Exercise 11.4-1, p. 277)
    def h_aux1(self, k):
        return k
    
    def h_aux2(self, k):
        return 1 + (k % (self.m - 1))
    
    # hash functions (cf. Exercise 11.4-1, p. 277)
    def h_lp(self, k, i): # linear probing
        return (self.h_aux1(k) + i) % self.m
    
    def h_qp(self, k, i): # quadratic probing
        c1 = 1; c2 = 3
        return (self.h_aux1(k) + c1 * i + c2 * i * i) % self.m
    
    def h_dh(self, k, i): # double hashing
        return (self.h_aux1(k) + i * self.h_aux2(k)) % self.m
    
    # hash function selector by collision resolution strategy
    def h_selector(self, col_res, k, i):
        selector = {
            'lp': self.h_lp,
            'qp': self.h_qp,
            'dh': self.h_dh
        }
        return selector[col_res](k, i)
    
    def reset_cols(self):
        self.collisions_del = 0
        self.collisions_ins = 0
        self.collisions_srch = 0
    
    def hash_insert(self, k):
        i = 0
        while True:
            j = self.h_selector(self.col_res, k, i)
            if self.T[j] is None or self.T[j] == 'DELETED':
                self.T[j] = k
                return j
            else:
                i += 1
                self.collisions_ins += 1
            if i == self.m:
                raise Exception('hash table overflow')
    
    def hash_search(self, k):
        i = 0
        while True:
            j = self.h_selector(self.col_res, k, i)
            if self.T[j] == k:
                return j
            i += 1
            self.collisions_srch += 1
            if i == self.m:
                raise Exception('element not found')
    
    def hash_delete(self, k):
        i = 0
        while True:
            j = self.h_selector(self.col_res, k, i)
            if self.T[j] == k:
                self.T[j] = 'DELETED'
                return j
            else:
                i += 1
                self.collisions_del += 1
            if self.T[j] is None and i == self.m:
                raise Exception('element not found')
