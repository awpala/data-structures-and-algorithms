/*
    CLRS Section 7.1, p. 171
*/

const partition = (A, p, r) => {
    const x = A[r];
    let i = p - 1;
    for(let j = p; j < r; j++) {
        if (A[j] <= x) {
            i++;
            [A[i], A[j]] = [A[j], A[i]];
        }
    }
    [A[i + 1], A[r]] = [A[r], A[i + 1]];
    return i + 1;
}

const quicksort = (A, p, r) => {
    if (p < r) {
        const q = partition(A, p, r);
        quicksort(A, p, q - 1);
        quicksort(A, q + 1, r);
    }
}

module.exports = {
    quicksort
}