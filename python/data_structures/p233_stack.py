'''
    CLRS Section 10.1, p. 233
'''

class Stack:
    def __init__(self, S=None, top=-1):
        if S is None:
            self.S = []
        else:
            self.S = S
        self.top = top
    
    def stack_empty(self):
        return self.top == -1
    
    def push(self, x):
        self.top += 1
        self.S[self.top] = x
    
    def pop(self):
        if self.stack_empty():
            raise Exception('underflow')
        else:
            self.top -= 1
            self.S.append(None)
            return self.S.pop(self.top + 1)
