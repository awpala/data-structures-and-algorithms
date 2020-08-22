/* 
    This file contains abstract data types (ADTs) used as 
    auxiliary data structures in the main data structures
    and algorithms
*/

// ----- ABSTRACT DATA TYPES (ADTs) ----- //

// A is a list ADT, represented by an array
const A = [];

class ListNode {
    constructor(key, prev = null, next = null) {
        this.key = key;
        this.prev = prev;
        this.next = next;
    }
};

class TreeNode {
    constructor(key, p = null, left = null, right = null) {
        this.key = key;
        this.p = p;
        this.left = left;
        this.right = right;
    }
};

class RBTreeNode extends TreeNode {
    constructor(key, color = null, p = null, left = null, right = null) {
        super(key, p, left, right);
        this.color = color;
    }
}

class HuffmanNode {
    constructor(char, freq = 0, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

class DisjointSetNode {
    constructor(key, p = this, rank = 0) {
        this.key = key;
        this.p = p;
        this.rank = rank;
    }
}

class GraphVertex {
    constructor(key = null, adjacentVertices = {}) {
        this.key = key;
        this.adjacentVertices = adjacentVertices;
    }
}

class UnweightedGraph {
    constructor(V = {}) {
        this.V = V;
    }

    addUndirectedEdge = (u, v) => {
        if(!this.V[u.key]) {
            this.V[u.key] = u;
        }
        if(!this.V[v.key]) {
            this.V[v.key] = v;
        }
        this.V[u.key].adjacentVertices[v.key] = v;
        this.V[v.key].adjacentVertices[u.key] = u;
    }

    addDirectedEdge = (u, v) => {
        if(!this.V[u.key]) {
            this.V[u.key] = u;
        }
        if(!this.V[v.key]) {
            this.V[v.key] = v;
        }
        this.V[u.key].adjacentVertices[v.key] = v;
    }
}

class GraphVertexBFS extends GraphVertex {
    constructor(key = null, adjacentVertices = {}, color = 'WHITE', d = Number.POSITIVE_INFINITY, pi = null) {
        super(key, adjacentVertices);
        this.color = color;
        this.d = d;
        this.pi = pi;
    }
}

class GraphVertexDFS extends GraphVertex {
    constructor(key = null, adjacentVertices = {}, color = 'WHITE', pi = null, d = null, f = null) {
        super(key, adjacentVertices);
        this.color = color;
        this.pi = pi;
        this.d = d;
        this.f = f;
    }
}

class GraphVertexMST {
    constructor(name = null, adjacentVertices = {}) {
        this.name = name;
        this.adjacentVertices = adjacentVertices;
    }
}

class WeightedGraph {
    constructor(V = {}, E = []) {
        this.V = V;
        this.E = E;
    }

    addUndirectedEdge = (u, v, w) => { // MST
        if(!this.V[u.name]) {
            this.V[u.name] = u;
        }
        if(!this.V[v.name]) {
            this.V[v.name] = v;
        }
        this.E.push({
            vertices: { u, v },
            weight: w
        });

        this.V[u.name].adjacentVertices[v.name] = { 
            w: this.E[this.E.length - 1]
        };
        this.V[v.name].adjacentVertices[u.name] = {
            w: this.E[this.E.length - 1]
        };
    }

    addDirectedEdge = (u, v, w) => { // SSSP
        if(!this.V[u.key]) {
            this.V[u.key] = u;
        }
        if(!this.V[v.key]) {
            this.V[v.key] = v;
        }
        this.E.push({
            vertices: { u, v },
            weight: w
        });

        this.V[u.key].adjacentVertices[v.key] = { 
            w: this.E[this.E.length - 1]
        };
    }
}

class GraphVertexPrim extends GraphVertexMST {
    constructor(name = null, adjacentVertices = {}, key = Number.POSITIVE_INFINITY, pi = null, color = 'WHITE') {
        super(name, adjacentVertices);
        this.key = key;
        this.pi = pi;
        this.color = color;
    }
}

class GraphVertexSSSP extends GraphVertex {
    constructor(key = null, adjacentVertices = {}, d = Number.POSITIVE_INFINITY, pi = null) {
        super(key, adjacentVertices);
        this.d = d;
        this.pi = pi;
    }
}


// ----- AUXILIARY FUNCTIONS ----- //

const initializeSingleSource = (G, s) => {
    for (let v in G.V) {
        v.d = Number.POSITIVE_INFINITY;
        v.pi = null;
    }
    s.d = 0;
}

const relax = (u, v, w) => {
    if (v.d > u.d + w) {
        v.d = u.d + w;
        v.pi = u;
    }
}

module.exports.A = A;
module.exports.ListNode = ListNode;
module.exports.TreeNode = TreeNode;
module.exports.RBTreeNode = RBTreeNode;
module.exports.HuffmanNode = HuffmanNode;
module.exports.DisjointSetNode = DisjointSetNode;
module.exports.GraphVertex = GraphVertex;
module.exports.UnweightedGraph = UnweightedGraph;
module.exports.GraphVertexBFS = GraphVertexBFS;
module.exports.GraphVertexDFS = GraphVertexDFS;
module.exports.GraphVertexMST = GraphVertexMST;
module.exports.WeightedGraph = WeightedGraph;
module.exports.GraphVertexPrim = GraphVertexPrim;
module.exports.GraphVertexSSSP = GraphVertexSSSP;

module.exports.initializeSingleSource = initializeSingleSource;
module.exports.relax = relax;