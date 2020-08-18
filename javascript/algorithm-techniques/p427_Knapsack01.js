/*
    CLRS Exercise 16.2-2, p. 427
*/

class Knapsack01 {
    constructor(v = [], w = [], W) {
        this.v = {};
        v.forEach((value, index) => this.v[index + 1] = value);
        this.w = {};
        w.forEach((weight, index) => this.w[index + 1] = weight);
        
        this.n = v.length;
        this.W = W;
    }

    knapsack01 = (n = this.n, W = this.W) => {
        let K = [];
        for (let i = 0; i <= this.n; i++) {
            K.push(new Array (this.W + 1))
        }
        for (let j = 0; j <= this.W; j++) {
            K[0][j] = 0;
        }
        for (let i = 0; i <= this.n; i++) {
            K[i][0] = 0;
        }
        for (let i = 1; i <= this.n; i++) {
            for (let j = 1; j <= this.W; j++) {
                if (j < this.w[i]) {
                    K[i][j] = K[i - 1][j];
                } else {
                    K[i][j] = Math.max(K[i - 1][j], K[i - 1][j - this.w[i]] + this.v[i]);
                }
            }
        }
        return K[n][W];
    }
}

module.exports = {
    Knapsack01
}