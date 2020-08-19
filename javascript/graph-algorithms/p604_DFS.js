/*
    CLRS Section 22.3, p. 604
*/

class DFS {
    constructor(time = 0) {
        this.time = time;
    }

    DFSVisit = (G, u) => {
        this.time++; // white vertex u has just been discovered
        u.d = this.time;
        u.color = 'GRAY';
        for (let v in u.adjacentVertices) { // explore edge (u, v)
            const vertex = u.adjacentVertices[v];
            if (vertex.color === 'WHITE') {
                vertex.pi = u;
                this.DFSVisit(G, vertex);
            }
        }
        u.color = 'BLACK'; // blacken u; it is finished
        this.time++;
        u.f = this.time;
    }

    DFS = (G) => {
        for (let u in G) {
            G[u].color = 'WHITE';
            G[u].pi = null;
        }
        this.time = 0;
        for (let u in G) {
            if (G[u].color === 'WHITE') {
                this.DFSVisit(G, G[u]);
            }
        }
    }
}

module.exports = {
    DFS
}