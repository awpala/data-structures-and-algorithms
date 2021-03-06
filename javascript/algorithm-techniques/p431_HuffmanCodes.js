/*
    CLRS Section 16.3, p. 431
*/

const { HuffmanNode } = require('../utilities');

class HuffmanMinPQ {
    constructor(C = {}) {
        this.C = C;

        this.Q = [];
        for (let char in C) {
            this.insert(new HuffmanNode(char, C[char]))
        }
    }

    // Min PQ Operations
    // N.B. These approximate the behavior of a min PQ, as by
    // perfoming a sort with respect to freq, the minimum-value freq
    // is always extracted by extractMin(), as in a min PQ. A more
    // rigorous implementation would involve modifying the class
    // MinPQ to work with CharNode.freq values rather than
    // simple primitive number values.

    insert = (z) => {
        this.Q.splice(0, 0, z);
        this.Q.sort((a, b) => a.freq - b.freq);
    }

    extractMin = () => {
        return this.Q.shift(0);
    }
}

const huffman = (C) => {
    const n = Object.keys(C).length;
    const Q = new HuffmanMinPQ(C);
    for (let i = 1; i < n; i++) {
        let z = new HuffmanNode(null); // N.B. null/non-key for tree nodes
        let x = z.left = Q.extractMin();
        let y = z.right = Q.extractMin();
        z.freq = x.freq + y.freq;
        Q.insert(z);
    }
    return Q.extractMin();
}

const printHuffman = (z, encodingStr = '') => { // N.B. preorder traversal
    if (z !== null) {
        if(z.char !== null) {
            console.log(`${z.char}: ${encodingStr}`);
        }
        printHuffman(z.left, `${encodingStr}0`);
        printHuffman(z.right, `${encodingStr}1`);
    }
}

module.exports.huffman = huffman;
module.exports.printHuffman = printHuffman;