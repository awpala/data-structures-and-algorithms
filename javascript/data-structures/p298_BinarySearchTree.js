/*
    CLRS Chapter 12
*/

class BinarySearchTree {
    constructor(root = null, size = 0) {
        this.root = root;
        this.size = size;
    }

    inorderTreeWalk = (x) => {
        if (x !== null) {
            this.inorderTreeWalk(x.left);
            console.log(`${x.key} `);
            this.inorderTreeWalk(x.right);
        }
    }

    preorderTreeWalk = (x) => { // cf. Exercise 12.1-4, p. 289
        if (x !== null) {
            console.log(`${x.key} `);
            this.preorderTreeWalk(x.left);
            this.preorderTreeWalk(x.right);
        }
    }

    postorderTreeWalk = (x) => { // cf. Exercise 12.1-4, p. 289
        if (x !== null) {
            this.postorderTreeWalk(x.left);
            this.postorderTreeWalk(x.right);
            console.log(`${x.key} `);
        }
    }

    treeSearch = (x, k) => {
        if (x === null || k === x.key) {
            return x;
        }
        if (k < x.key) {
            return this.treeSearch(x.left, k);
        } else {
            return this.treeSearch(x.right, k);
        }
    }

    treeMinimum = (x) => {
        while (x.left !== null) {
            x = x.left;
        }
        return x;
    }

    treeMaximum = (x) => {
        while (x.right !== null) {
            x = x.right;
        }
        return x;
    }

    treeSuccessor = (x) => {
        if (x.right !== null) {
            return this.treeMinimum(x.right);
        }
        let y = x.p;
        while (y !== null && x === y.right) {
            x = y;
            y = y.p;
        }
        return y;
    }

    treePredecessor = (x) => { // cf. Exercise 12.2-3, p. 293
        if (x.left !== null) {
            return this.treeMaximum(x.left);
        }
        let y = x.p;
        while (y !== null && x === y.left) {
            x = y;
            y = y.p;
        }
        return y;
    }

    treeInsert = (z) => {
        this.size++;
        let y = null;
        let x = this.root;
        while (x !== null) {
            y = x;
            if (z.key < x.key) {
                x = x.left;
            } else {
                x = x.right;
            }
        }
        z.p = y;
        if (y === null) {
            this.root = z; // tree T was empty
        } else if (z.key < y.key) {
            y.left = z;
        } else {
            y.right = z;
        }
    }

    transplant = (u, v) => {
        if (u.p === null) {
            this.root = v;
        } else if (u === u.p.left) {
            u.p.left = v;
        } else {
            u.p.right = v;
        }
        if (v !== null) {
            v.p = u.p;
        }
    }

    treeDelete = (z) => {
        this.size--;
        if (z.left === null) {
            this.transplant(z, z.right);
        } else if (z.right === null) {
            this.transplant(z, z.left);
        } else {
            let y = this.treeMinimum(z.right);
            if (y.p !== z) {
                this.transplant(y, y.right);
                y.right = z.right;
                y.right.p = y;
            }
            this.transplant(z, y);
            y.left = z.left;
            y.left.p = y;
        }
    }
}

module.exports = {
    BinarySearchTree
}