/*
    CLRS Section 16.3, p. 431
*/

let { CharNode } = require('../utilities');

class HuffmanCodes {
    constructor(C = {}) {
        this.C = C;

        this.Q = [];
        for (let char in C) {
            this.insert(new CharNode(char, C[char]))
        }
    }

    insert = (z, Q = this.Q) => {
        Q.splice(0, 0, z);
        Q.sort((a, b) => a.freq - b.freq);
    }

    extractMin = (Q = this.Q) => {
        return Q.shift(0);
    }

    huffman = (C = this.C) => {
        const n = Object.keys(C).length;
        // N.B. Q initialized in constructor
        for (let i = 1; i < n; i++) {
            let z = new CharNode(null, null);
            let x = z.left = this.extractMin();
            let y = z.right = this.extractMin();
            z.freq = x.freq + y.freq;
            this.insert(z);
        }
        return this.extractMin();
    }

    printHuffman = (z, dir = null, enc = '') => { // N.B. preorder traversal
        if (z !== null) {
            if(z.char !== null) {
                console.log(`${z.char}: ${enc}`);
            }
            this.printHuffman(z.left, 'left', `${enc}0`);
            this.printHuffman(z.right, 'right', `${enc}1`);
        }
    }
}

module.exports = {
    HuffmanCodes
}