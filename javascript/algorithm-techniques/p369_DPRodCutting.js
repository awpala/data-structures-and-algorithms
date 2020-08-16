/*
    CLRS Section 15.1, p. 369
*/

class RodCutting {
    constructor(p = []) {
        this.p = new Object();
        p.forEach((price, i) => this.p[i + 1] = price); // N.B. store input array as key/value pairs in this.p, indexed starting at 1

        this.n = p.length;
    }

    memoizedCutRodAux = (n, r) => {
        if (r[n] >= 0) {
            return r[n];
        }
        let q;
        if (n === 0) {
            q = 0;
        } else {
            q = Number.NEGATIVE_INFINITY;
            for (let i = 1; i <= n; i++) {
                q = Math.max(q, this.p[i] + this.memoizedCutRodAux(n - i, r))
            }
        }
        r[n] = q;
        return q;
    }

    memoizedCutRod = () => {
        let r = new Array(this.n + 1);
        for (let i = 0; i <= this.n; i++) {
            r[i] = Number.NEGATIVE_INFINITY;
        }
        return this.memoizedCutRodAux(this.n, r);
    }

    bottomUpCutRod = () => {
        let r = new Array(this.n + 1);
        r[0] = 0;
        for (let j = 1; j <= this.n; j++) {
            let q = Number.NEGATIVE_INFINITY;
            for (let i = 1; i <= j; i++) {
                q = Math.max(q, this.p[i] + r[j - i]);
            }
            r[j] = q;
        }
        return r[this.n];
    }

    extendedBottomUpCutRod = () => {
        let r = new Array(this.n + 1), s = new Array(this.n + 1);
        r[0] = 0, s[0] = 0;
        for (let j = 1; j <= this.n; j++) {
            let q = Number.NEGATIVE_INFINITY;
            for (let i = 1; i <= j; i++) {
                if (q < this.p[i] + r[j - i]) {
                    q = this.p[i] + r[j - i];
                    s[j] = i;
                }
            }
            r[j] = q;
        }
        return [r, s];
    }
}

module.exports = {
    RodCutting
}