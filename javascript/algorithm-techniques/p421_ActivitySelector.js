/*
    CLRS Section 16.1, p. 421
*/

class ActivitySelector {
    constructor(s = [], f = []) {
        this.s = {};
        s.forEach((start, i) => this.s[i + 1] = start);
        this.f = {};
        f.forEach((finish, i) => this.f[i + 1] = finish);

        this.A = {};
        for(const key in this.s) {
            this.A[key] = [this.s[key], this.f[key]];
        }

        this.n = s.length;
    }

    greedyActivitySelector = () => {
        let n = this.n;
        let A = {};
        A[1] = this.A[1];
        let k = 1;
        for (let m = 2; m <= n; m++) {
            if (this.s[m] >= this.f[k]) {
                A[m] = this.A[m];
                k = m;
            }
        }
        return A;
    } 
}

module.exports = {
    ActivitySelector
}