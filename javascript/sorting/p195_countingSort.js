/*
    CLRS Section 8.2, p. 195
*/

const countingSort = (A, B, k) => {
    const C = new Array(k + 1);
    for (let i = 0; i <= k; i++) {
        C[i] = 0; 
    }
    for (let j = 0; j < A.length; j++) {
        C[A[j]]++;
    }
    // C[i] now contains the number of elements equal to i
    for (let i = 1; i <= k; i++) {
        C[i] += C[i - 1];
    }
    // C[i] now contains the number of elements less than or equal to  i
    for (let j = A.length - 1; j >= 0; j--) {
        B[C[A[j]] - 1] = A[j];
        C[A[j]]--;
    }
}

module.exports = {
    countingSort
}