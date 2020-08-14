/*
    CLRS Section 11.2, p. 258
*/

const { LinkedList } = require('./p238_LinkedList');

class HashTableChaining {
    constructor(m = 0) {
        this.m = m;

        this.T = [];
        for(let i = 0; i <= m; i++) {
            this.T.push(new LinkedList());
        }
    }

    h = (k) => k % this.m; // cf. Exercise 11.2-2, p. 261

    chainedHashInsert = (x) => {
        this.T[this.h(x.key)].listInsert(x);
    }

    chainedHashSearch = (k) => {
        return this.T[this.h(k)].listSearch(k);
    }

    chainedHashDelete = (x) => {
        this.T[this.h(x.key)].listDelete(x);
    }
}

module.exports = {
    HashTableChaining
}