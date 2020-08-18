/*
    CLRS Exercise 16.2-6, p. 428
*/

class KnapsackFractional {
    constructor(v = [], w = [], W) {
        this.v = {};
        v.forEach((value, index) => this.v[index + 1] = value);
        this.w = {};
        w.forEach((weight, index) => this.w[index + 1] = weight);
        this.f = {};
        v.forEach((_, index) => this.f[index + 1] = this.v[index + 1] / this.w[index + 1]);
        
        this.W = W;
    }

    median = (f) => {
        const n = Object.keys(f).length;
        
        if (n === 0) return 0;

        const values = [];
        for (let key in f) {
            values.push(f[key]);
        }

        values.sort((a, b) => a - b);

        const midIndex = Math.floor(values.length / 2);

        return (values.length % 2 !== 0) 
            ? values[midIndex]
            : (values[midIndex - 1] + values[midIndex]) / 2;
    }

    knapsackFractional = (f = this.f, W = this.W) => {
        let n = Object.keys(f).length;

        if (n === 1) {
            let value = 0;
            for(let key in f) { // access the remaining value in f
                if (this.w[key] > W) {
                    value = this.v[key] * (W / this.w[key]);
                } else {
                    value = this.v[key];
                }
            }
            return value;
        }
        const median = this.median(f);
        let aboveMedianW = 0, aboveMedianV = 0;
        for(let key in f) {
            if (f[key] > median) {
                aboveMedianW += this.w[key];
                aboveMedianV += this.v[key];
            }
        }
        if (aboveMedianW > W) {
            f = {};
            for(let key in this.f) {
                if (this.f[key] > median) {
                    f[key] = this.f[key];
                }
            }
            return aboveMedianV + this.knapsackFractional(f, aboveMedianW);
        } else {
            f = {};
            for(let key in this.f) {
                if (this.f[key] <= median) {
                    f[key] = this.f[key];
                }
            }
            return aboveMedianV + this.knapsackFractional(f, W - aboveMedianW);
        }
    }
}

module.exports = {
    KnapsackFractional
}