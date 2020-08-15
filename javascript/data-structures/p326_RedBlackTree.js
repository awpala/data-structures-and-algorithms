/*
    CLRS Chapter 13
*/

const { RBTreeNode } = require('../utilities');

class RedBlackTree {
    constructor(root = null, size = 0) {
        this.root = root;
        this.size = size;

        this.nil = new RBTreeNode(null, 'BLACK');
    }

    leftRotate = (x) => {
        let y = x.right; // set y
        x.right = y.left; // turn y's left subree into x's right subtree
        if (y.left !== this.nil) {
            y.left.p = x;
        }
        y.p = x.p; // link x's parent to y
        if (x.p === this.nil) {
            this.root = y;
        } else if (x === x.p.left) {
            x.p.left = y;
        } else {
            x.p.right = y;
        }
        y.left = x; // put x on y's left
        x.p = y;
    }

    rightRotate = (y) => { // cf. Exercise 13.2-1, p. 313
        let x = y.left; // set x
        y.left = x.right; // turn x's right subtree into y's left subtree
        if (x.right !== this.nil) {
            x.right.p = y;
        }
        x.p = y.p; // link y's parent to x
        if (y.p === this.nil) {
            this.root = x;
        } else if (y === y.p.right) {
            y.p.right = x;
        } else {
            y.p.left = x;
        }
        x.right = y; // put y on x's right
        y.p = x;
    }

    RBInsertFixup = (z) => {
        while (z.p.color === 'RED') {
            if (z.p === z.p.p.left) {
                let y = z.p.p.right;
                if (y.color === 'RED') {
                    z.p.color = 'BLACK'; // case 1
                    y.color = 'BLACK'; // case 1
                    z.p.p.color = 'RED'; // case 1
                    z = z.p.p; // case 1
                } else {
                    if (z === z.p.right) {
                        z = z.p; // case 2
                        this.leftRotate(z); // case 2
                    }
                    z.p.color = 'BLACK'; // case 3
                    z.p.p.color = 'RED'; // case 3
                    this.rightRotate(z.p.p); // case 3
                }
            } else { // same as THEN clause with "right" and "left" exchanged
                let y = z.p.p.left;
                if (y.color === 'RED') {
                    z.p.color = 'BLACK'; // case 1
                    y.color = 'BLACK'; // case 1
                    z.p.p.color = 'RED'; // case 1
                    z = z.p.p; // case 1
                } else {
                    if (z === z.p.left) {
                        z = z.p; // case 2
                        this.rightRotate(z); // case 2
                    }
                    z.p.color = 'BLACK'; // case 3
                    z.p.p.color = 'RED'; // case 3
                    this.leftRotate(z.p.p); // case 3
                }
            }
        }
        this.root.color = 'BLACK';
    }

    RBInsert = (z) => {
        if (this.size === 0) { // N.B. guard against x.key undefined (see below note)
            this.root = z;
            this.size++;
            z.color = 'BLACK';
            z.p = this.nil;
            z.left = this.nil;
            z.right = this.nil;
            return;
        }
        this.size++;
        let y = this.nil;
        let x = this.root;
        while (x !== this.nil) {
            y = x;
            if (z.key < x.key) { // N.B. if this.size === 0, x.key is undefined
                x = x.left;
            } else {
                x = x.right;
            }
        }
        z.p = y;
        if (y === this.nil) {
            this.root = z;
        } else if (z.key < y.key) {
            y.left = z;
        } else {
            y.right = z;
        }
        z.left = this.nil;
        z.right = this.nil;
        z.color = 'RED';
        this.RBInsertFixup(z);
    }

    RBTransplant = (u, v) => {
        if (u.p === this.nil) {
            this.root = v;
        } else if (u === u.p.left) {
            u.p.left = v;
        } else {
            u.p.right = v;
        }
        v.p = u.p;
    }

    treeMinimum = (x) => {
        while (x.left !== this.nil) {
            x = x.left;
        }
        return x;
    }

    RBDeleteFixup = (x) => {
        while (x !== this.root && x.color === 'BLACK') {
            if (x === x.p.left) {
                let w = x.p.right;
                if (w.color === 'RED') {
                    w.color = 'BLACK'; // case 1
                    x.p.color = 'RED'; // case 1
                    this.leftRotate(x.p); // case 1
                    w = x.p.right; // case 1
                }
                if (w.left.color === 'BLACK' && w.right.color === 'BLACK') {
                    w.color === 'RED'; // case 2
                    x = x.p; // case 2
                } else {
                    if (w.right.color === 'BLACK') {
                        w.left.color = 'BLACK'; // case 3
                        w.color = 'RED'; // case 3
                        this.rightRotate(w); // case 3
                        w = x.p.right; // case 3
                    }
                    w.color = x.p.color; // case 4
                    x.p.color = 'BLACK'; // case 4
                    w.right.color = 'BLACK'; // case 4
                    this.leftRotate(x.p); // case 4
                    x = this.root; // case 4
                }
            } else { // same as THEN clause with "right" and "left" exchanged
                let w = x.p.left;
                if (w.color === 'RED') {
                    w.color = 'BLACK'; // case 1
                    x.p.color = 'RED'; // case 1
                    this.rightRotate(x.p); // case 1
                    w = x.p.left; // case 1
                }
                if (w.right.color === 'BLACK' && w.left.color === 'BLACK') {
                    w.color === 'RED'; // case 2
                    x = x.p; // case 2
                } else {
                    if (w.left.color === 'BLACK') {
                        w.right.color = 'BLACK'; // case 3
                        w.color = 'RED'; // case 3
                        this.leftRotate(w); // case 3
                        w = x.p.left; // case 3
                    }
                    w.color = x.p.color; // case 4
                    x.p.color = 'BLACK'; // case 4
                    w.left.color = 'BLACK'; // case 4
                    this.rightRotate(x.p); // case 4
                    x = this.root; // case 4
                }
            }
        }
        x.color = 'BLACK';
    }

    RBDelete = (z) => {
        if (this.size === 1) { // delete out directly if only 1 tree node present
            this.root = null;
            this.size--;
            z.left = undefined;
            z.right = undefined;
            z.p = undefined;
            return;
        }
        this.size--;
        let y = z;
        let yOriginalColor = y.color;
        if (z.left === this.nil) {
            let x = z.right;
            this.RBTransplant(z, z.right);
        } else if (z.right === this.nil) {
            let x = z.left;
            this.RBTransplant(z, z.left);
        } else {
            y = this.treeMinimum(z.right);
            yOriginalColor = y.color;
            let x = y.right;
            if (y.p === z) {
                x.p = y;
            } else {
                this.RBTransplant(y, y.right);
                y.right = z.right;
                y.right.p = y;
            }
            this.RBTransplant(z, y);
            y.left = z.left;
            y.left.p = y;
            y.color = z.color;
        }
        if (yOriginalColor === 'BLACK') {
            this.RBDeleteFixup(x);
        }
    }

    // additional red-black tree procedures (cf. BinarySearchTree)

    inorderTreeWalk = (x) => {
        if (x !== this.nil) {
            this.inorderTreeWalk(x.left);
            console.log(x.key);
            this.inorderTreeWalk(x.right);
        }
    }

    preorderTreeWalk = (x) => { // cf. Exercise 12.1-4, p. 289
        if (x !== this.nil) {
            console.log(x.key);
            this.preorderTreeWalk(x.left);
            this.preorderTreeWalk(x.right);
        }
    }

    postorderTreeWalk = (x) => { // cf. Exercise 12.1-4, p. 289
        if (x !== this.nil) {
            this.postorderTreeWalk(x.left);
            this.postorderTreeWalk(x.right);
            console.log(x.key);
        }
    }

    treeSearch = (x, k) => {
        if (x === this.nil || k === x.key) {
            return x;
        }
        if (k < x.key) {
            return this.treeSearch(x.left, k);
        } else {
            return this.treeSearch(x.right, k);
        }
    }

    treeMaximum = (x) => {
        while (x.right !== this.nil) {
            x = x.right;
        }
        return x;
    }

    treeSuccessor = (x) => {
        if (x.right !== this.nil) {
            return this.treeMinimum(x.right);
        }
        let y = x.p;
        while (y !== this.nil && x === y.right) {
            x = y;
            y = y.p;
        }
        return y;
    }

    treePredecessor = (x) => { // cf. Exercise 12.2-3, p. 293
        if (x.left !== this.nil) {
            return this.treeMaximum(x.left);
        }
        let y = x.p;
        while (y !== this.nil && x === y.left) {
            x = y;
            y = y.p;
        }
        return y;
    }
}

module.exports = {
    RedBlackTree
}