/*
    CLRS Section 21.3, p. 571
*/

let { SetNode } = require('../utilities');

class DisjointSet {
    constructor(S = []) {
        this.S = {};
        for (let element of S) {
            const newSet = new SetNode(element);
            this.makeSet(newSet);
            this.S[element] = newSet;
        }
    }

    makeSet = (x) => {
        x.p = x;
        x.rank = 0;
    }

    link = (x, y) => {
        /* textbook's algorithm */

        // if (x.rank > y.rank) {
        //     y.p = x;
        // } else {
        //     x.p = y;
        //     if (x.rank === y.rank) {
        //         // y.rank++;
        //         y.rank++;
        //     }
        // }

        /* 
            cf. https://ocw.mit.edu/courses/
            electrical-engineering-and-computer-science/
            6-046j-design-and-analysis-of-algorithms-spring-2012/lecture-notes/MIT6_046JS12_lec16.pdf
            -- below is different from textbook's algorithm 
        */

        if (x.rank === y.rank) {
            x.rank++;
            y.p = x;
        } else if (x.rank > y.rank) {
            y.p = x;
        } else {
            x.p = y;
        }
    }

    findSet = (x) => { // path compression
        if (x !== x.p) {
            x.p = this.findSet(x.p);
        }
        return x.p;
    }

    union = (x, y) => { // union by rank
        this.link(this.findSet(x), this.findSet(y));
    }
}

module.exports = {
    DisjointSet
}