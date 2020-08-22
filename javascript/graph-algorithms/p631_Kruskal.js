/*
    CLRS Section 23.2, p. 631
*/

const { DisjointSetNode } = require('../utilities');

class KruskalDisjointSet {
    constructor(V) {
        this.S = {};
        for (let vertex in V) {
            const newSet = new DisjointSetNode(V[vertex]);
            this.makeSet(newSet);
            this.S[vertex] = newSet;
        }
    }

    makeSet = (x) => {
        x.p = x;
        x.rank = 0;
    }

    link = (x, y) => {
        if (x.rank === y.rank) {
            x.rank++;
            y.p = x;
        } else if (x.rank > y.rank) {
            y.p = x;
        } else {
            x.p = y;
        }
    }

    findSet = (x) => {
        if (x !== x.p) {
            x.p = this.findSet(x.p);
        }
        return x.p;
    }

    union = (x, y) => {
        this.link(this.findSet(x), this.findSet(y));
    }
}    

const KruskalMST = (G) => {
    let A = {
        totalWeight: 0,
        edgesMST: []
    };
    let ds = new KruskalDisjointSet(G.V);
    G.E.sort((a, b) => a.weight - b.weight);
    for (let edge of G.E) {
        const vertices = edge.vertices;
        const u = ds.S[vertices.u.name];
        const v = ds.S[vertices.v.name];
        if (ds.findSet(u) !== ds.findSet(v)) {
            A.edgesMST.push(edge);
            A.totalWeight += edge.weight;
            ds.union(u, v);
        }
    }
    return A;
}

module.exports = {
    KruskalMST
}