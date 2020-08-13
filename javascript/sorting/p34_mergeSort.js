/*
    CLRS Section 2.3, p. 34
*/

const merge = (A, p, q, r) => {
    let n1 = q - p + 1;
    let n2 = r - q;
    const L = new Array(n1 + 1), R = new Array(n2 + 1);
    for (let i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = A[q + j + 1];
    }
    L[n1] = Infinity;
    R[n2] = Infinity;
    let i = 0;
    let j = 0;
    for (let k = p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
    }
}

const mergeSort = (A, p, r) => {
    if (p < r) {
        let q = Math.floor((p + r)/2)
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

module.exports = {
    mergeSort
}