/*
    CLRS Exercise 16.2-2, p. 427
*/

class Knapsack01 {
    constructor(v = [], w = [], W) {
        this.v = {};
        v.forEach((value, i) => this.v[i + 1] = value);
        this.w = {};
        w.forEach((weight, i) => this.w[i + 1] = weight);
        
        this.n = v.length;
        this.W = W;
    }

    knapsack01 = () => {
        let K = [];
        for (let i = 0; i <= this.n; i++) {
            K.push(new Array (this.W + 1))
        }
        for (let j = 1; j <= this.W; j++) {
            K[0][j] = 0;
        }
        for (let i = 1; i <= this.n; i++) {
            K[i][0] = 0;
        }
        for (let i = 1; i <= this.n; i++) {
            for (let j = 1; j <= this.W; j++) {
                if (j < this.w[i]) {
                    K[i][j] = K[i - 1][j];
                }
                K[i][j] = Math.max(K[i - 1][j], K[i - 1][j - this.w[i]] + this.v[i]);
            }
        }
        return K[this.n][this.W];
    }
}


module.exports = {
    Knapsack01
}