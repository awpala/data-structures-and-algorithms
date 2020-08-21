/*
    CLRS Section 23.3, p. 634
*/

class PrimMinPQ {
    constructor(G, Q = [], length = 0) {
        this.Q = Q;
        this.length = length;
        this.buildMinPQ(G);
    }

    // Min PQ Operations
    // N.B. These approximate the behavior of a min PQ, as by
    // perfoming a sort with respect to key, the minimum-value key
    // is always extracted by extractMin(), as in a min PQ. A more
    // rigorous implementation would involve modifying the class
    // MinPQ to work with GraphVertexPrim.key values rather than
    // simple primitive number values.

    buildMinPQ = (G) => {
        for (let vertex in G.V) {
            this.length++;
            this.Q.push(G.V[vertex]);
        }
        this.Q.sort((a, b) => a.key - b.key);
    }

    extractMin = () => {
        this.length--;
        const u = this.Q.shift(0);
        this.Q.sort((a, b) => a.key - b.key);
        return u;
    }

    decreaseKey = (v, w) => {
        const vIndexInQ = this.Q.findIndex(vertex => vertex === v);
        this.Q[vIndexInQ].key = w;
        this.Q.sort((a, b) => a.key - b.key);
    }
}

// Minor deviation from textbook version, using coloring instead
// -- cf. https://home.cse.ust.hk/~dekai/271/notes/L07/L07.pdf
// -- cf. https://cs.stackexchange.com/questions/50964/confusion-in-clrss-version-of-prims-algorithm
const PrimMST = (G, r) => {
    for (let u in G.V) {
        G.V[u].key = Number.POSITIVE_INFINITY;
        G.V[u].pi = null;
        G.V[u].color = 'WHITE'
    }
    r.key = 0;
    const Q = new PrimMinPQ(G);
    while (Q.length !== 0) {
        const u = Q.extractMin();
        const adj = u.adjacentVertices;
        for (let vertex in adj) {
            const v = G.V[vertex];
            const w = adj[vertex].w.weight;
            if((v.color === 'WHITE') && (w < v.key)) {
                v.pi = u;
                Q.decreaseKey(v, w)
            }
            u.color = 'BLACK'
        }
    }
}

module.exports = {
    PrimMST
}