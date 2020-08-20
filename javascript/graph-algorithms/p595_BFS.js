/*
    CLRS Section 22.2, p. 595
*/

class BFSQueue {
    constructor(Q = [], length = 0) {
        this.Q = Q;
        this.length = length;
    }

    enqueue = (v) => {
        this.length++;
        this.Q.push(v);
    }

    dequeue = () => {
        this.length--;
        return this.Q.shift(0);
    }
}

const BFS = (G, s) => {
    for (let v in G) {
        if (G[v] !== s) {
            G[v].color = 'WHITE';
            G[v].d = Number.POSITIVE_INFINITY;
            G[v].pi = null;
        }
    }
    s.color = 'GRAY';
    s.d = 0;
    s.pi = null;
    const Q = new BFSQueue();
    Q.enqueue(s);
    while (Q.length !== 0) {
        let u = Q.dequeue();
        for (let v in G[u.key].adjacentVertices) {
            const vertex = G[u.key].adjacentVertices[v];
            if (vertex.color === 'WHITE') {
                vertex.color = 'GRAY';
                vertex.d = u.d + 1;
                vertex.pi = u;
                Q.enqueue(vertex);
            }
        }
        u.color = 'BLACK';
    }
}

module.exports = {
    BFS
}