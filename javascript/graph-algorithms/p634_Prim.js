/*
    CLRS Section 23.3, p. 634
*/

class Prim {
    constructor(Q = []) {
        this.Q = Q;
    }

    buildMinPQ = (G) => {
        for (let vertex in G.V) {
            this.Q.push(G.V[vertex]);
        }
        this.Q.sort((a, b) => a.key - b.key);
    }

    extractMin = () => {
        const u = this.Q.shift(0);
        this.Q.sort((a, b) => a.key - b.key);
        return u;
    }

    decreaseKey = (v, key) => {
        v.key = key;
        this.Q.sort((a, b) => a.key - b.key);
    }

    // Minor deviation from textbook version, using coloring instead
    // -- cf. https://home.cse.ust.hk/~dekai/271/notes/L07/L07.pdf
    // -- cf. https://cs.stackexchange.com/questions/50964/confusion-in-clrss-version-of-prims-algorithm
    PrimMST = (G, r) => {
        for (let u in G.V) {
            G.V[u].key = Number.POSITIVE_INFINITY;
            G.V[u].pi = null;
            G.V[u].color = 'WHITE'
        }
        r.key = 0;
        this.buildMinPQ(G);
        while (this.Q.length !== 0) {
            const u = this.extractMin();
            const adj = u.adjacentVertices;
            for (let vertex in adj) {
                const v = G.V[vertex];
                const w = adj[vertex].w.e.weight;
                const vIndexInQ = this.Q.findIndex(vertex => vertex === v);
                if((v.color === 'WHITE') && (w < v.key)) {
                    v.pi = u;
                    this.decreaseKey(this.Q[vIndexInQ], w)
                }
                u.color = 'BLACK'
            }
        }
    }
}

module.exports = {
    Prim
}