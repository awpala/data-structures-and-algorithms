/*
    CLRS Section 24.1, p. 431
*/

const { initializeSingleSource, relax } = require('../utilities');

const bellmanFord = (G, s) => {
    initializeSingleSource(G, s);
    const numVertices = Object.keys(G.V).length;
    for (let i = 1; i <= numVertices - 1; i++) {
        for (let edge of G.E) {
            const u = edge.vertices.u;
            const v = edge.vertices.v;
            const w = edge.weight;
            relax(u, v, w)
        }
    }
    for (let edge of G.E) {
        const u = edge.vertices.u;
        const v = edge.vertices.v;
        const w = edge.weight;
        if (v.d > u.d + w) {
            return false;
        }
    }
    return true;
}

module.exports.bellmanFord = bellmanFord;