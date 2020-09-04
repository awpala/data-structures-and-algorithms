/*
    CLRS Section 24.3, p. 658
*/

const { initializeSingleSource, relax } = require('../utilities');

class DijkstraMinPQ {
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
    // MinPQ to work with GraphVertexSSSP.d values rather than
    // simple primitive number values.

    buildMinPQ = (G) => {
        for (let vertex in G.V) {
            this.length++;
            this.Q.push(G.V[vertex]);
        }
        this.Q.sort((a, b) => a.d - b.d);
    }

    extractMin = () => {
        this.length--;
        const u = this.Q.shift(0);
        this.Q.sort((a, b) => a.d - b.d);
        return u;
    }
}

const dijkstra = (G, s) => {
    initializeSingleSource(G, s);
    let S = [];
    const Q = new DijkstraMinPQ(G);
    while (Q.length !== 0) {
        const u = Q.extractMin();
        S.push(u);
        const adj = u.adjacentVertices;
        for (let vertex in adj) {
            const v = G.V[vertex];
            const w = adj[vertex].edge.weight;
            relax(u, v, w);
        }
    }
}

module.exports = {
    dijkstra
}