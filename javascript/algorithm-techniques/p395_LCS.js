/*
    CLRS Section 15.4, p. 395
*/

const arrows = {
    up: '\u2191', // ↑
    left: '\u2190', // ←
    diag: '\u2196' // ↖
}

const LCSLength = (X, Y) => {
    let m = X.length;
    let n = Y.length;
    let b = [], c = [];
    for (let i = 0; i < m; i++) {
        b.push(new Array(n)); 
    }
    for (let j = 0; j <= m; j++) {
        c.push(new Array(n + 1));
    }
    for (let i = 1; i <= m; i++) {
        c[i][0] = 0;
    }
    for (let j = 0; j <= m; j++) {
        c[0][j] = 0;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (X[i - 1] === Y[j - 1]) {
                c[i][j] = c[i - 1][ j - 1] + 1;
                b[i - 1][j - 1] = arrows.diag;
            } else if (c[i - 1][j] >= c[i][j - 1]) {
                c[i][j] = c[i - 1][j];
                b[i - 1][j - 1] = arrows.up;
            } else {
                c[i][j] = c[i][j - 1];
                b[i - 1][j - 1] = arrows.left;
            }
        }
    }
    return [c, b];
}

const printLCS = (b, X, i, j) => {
    if (i === -1 || j === -1) {
        return '';
    }
    if (b[i][j] === arrows.diag) {
        return printLCS(b, X, i - 1, j - 1) + X[i];
    }
    else if (b[i][j] === arrows.up) {
        return printLCS(b, X, i - 1, j);
    } else {
        return printLCS(b, X, i, j - 1);
    }
}

const improvedPrintLCS = (c, X, Y) => {
    let i = X.length, j = Y.length, lcs = '';
    while (c[i][j] > 0) {
        if(X[i-1] === Y[j-1]) {
            lcs += X[i-1];
            i--;
            j--;
        } else if (c[i-1][j] === c[i][j]) {
            i--;
        } else {
            j--;
        }
    }
    return lcs.split('').reverse().join(''); // reverse output string to correct order
}

module.exports.LCSLength = LCSLength;
module.exports.printLCS = printLCS;
module.exports.improvedPrintLCS = improvedPrintLCS;