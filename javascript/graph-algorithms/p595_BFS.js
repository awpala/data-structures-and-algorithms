/*
    CLRS Section 22.2, p. 595
*/

class BFS {
    constructor(Q = []) {
        this.Q = Q;
    }

    enqueue = (v, Q = this.Q) => {
        Q.push(v);
    }

    dequeue = (Q = this.Q) => {
        return Q.shift(0);
    }

    BFS = (G, s) => {
        for(let v in G) {
            if (G[v] !== s) {
                G[v].color = 'WHITE';
                G[v].d = Number.POSITIVE_INFINITY;
                G[v].pi = null;
            }
        }
        s.color = 'GRAY';
        s.d = 0;
        s.pi = null;
        this.Q = [];
        this.enqueue(s);
        while (this.Q.length !== 0) {
            let u = this.dequeue();
            for (let v in G[u.key].adjacentVertices) {
                const vertex = G[u.key].adjacentVertices[v];
                if (vertex.color === 'WHITE') {
                    vertex.color = 'GRAY';
                    vertex.d = u.d + 1;
                    vertex.pi = u;
                    this.enqueue(vertex);
                }
            }
            u.color = 'BLACK';
        }
    }
}

module.exports = {
    BFS
}