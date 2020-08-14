/*
    CLRS Section 11.4, p. 271 and Exercise 11.4-1, p. 277
*/

class HashTableProbing {
    constructor(m = 0, colRes = 'lp') {
        this.m = m;
        this.colRes = colRes;

        this.T = new Array(m).fill(null);
        this.collisionsIns = 0;
        this.collisionsSrch = 0;
        this.collisionsDel = 0;
    }

     // auxiliary hash functions (cf. Exercise 11.4-1, p. 277)
    hAux1 = (k) => k;
    hAux2 = (k) => 1 + (k % (this.m - 1));

    // hash functions (cf. Exercise 11.4-1, p. 277)
    hLP = (k, i) => (this.hAux1(k) + i) % this.m; // linear probing
    hQP = (k, i) => { // quadratic probing
        const c1 = 1, c2 = 3;
        return (this.hAux1(k) + c1 * i + c2 * i * i) % this.m;
    }
    hDH = (k, i) => (this.hAux1(k) + i * this.hAux2(k)) % this.m; // double hashing

    // hash function selector by collision resolution strategy
    hSelector = (colRes, k, i) => {
        switch (colRes) {
            case 'lp':
                return this.hLP(k, i);
            case 'qp':
                return this.hQP(k, i);
            case 'dh':
                return this.hDH(k, i);
            default:
                break;
        }
    }

    resetCols = () => {
        this.collisionsDel = 0;
        this.collisionsIns = 0;
        this.collisionsSrch = 0;
    }

    hashInsert = (k) => {
        let i = 0;
        do {
            let j = this.hSelector(this.colRes, k, i);
            if (this.T[j] === null || this.T[j] === 'DELETED') {
                this.T[j] = k;
                return j;
            } else {
                i++;
                this.collisionsIns++;
            }
        } while (i !== this.m)
        throw new Error('hash table overflow')
    }

    hashSearch = (k) => {
        let i = 0;
        do {
            let j = this.hSelector(this.colRes, k, i);
            if(this.T[j] === k) {
                return j;
            }
            i++;
            this.collisionsSrch++;
        } while (i !== this.m)
        throw new Error('element not found')
    }

    hashDelete = (k) => {
        let i = 0, j;
        do {
            j = this.hSelector(this.colRes, k, i);
            if (this.T[j] === k) {
                this.T[j] = 'DELETED'
                return j;
            } else {
                i++;
                this.collisionsDel++;
            }
        } while (this.T[j] !== null && i !== this.m)
        throw new Error('element not found')
    }
}

module.exports = {
    HashTableProbing
}