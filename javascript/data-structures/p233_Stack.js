/*
    CLRS Section 10.1, p. 233
*/

class Stack {
    constructor(S = [], top = -1) {
        this.S = S;
        this.top = top;
    }

    stackEmpty = () => this.top === -1;

    push = (x) => {
        this.top++;
        this.S[this.top] = x;
    }
    
    pop = () => {
        if (this.stackEmpty()) {
            throw new Error('underflow');
        } else {
            this.top--;
            return this.S.splice(this.top + 1, 1, undefined)[0];
        }
    }
}

module.exports = {
    Stack
}