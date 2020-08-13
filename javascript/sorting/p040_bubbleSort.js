/*
    CLRS Chapter 2 Problem 2-2, p. 40
*/

const bubbleSort = (A) => {
    for (let i = 0; i < A.length; i++) {
        for (let j = A.length - 1; j >= i + 1; j--) {
            if (A[j] < A[j - 1]) {
                [A[j], A[j - 1]] = [A[j - 1], A[j]];
            }
        }
    }
}

module.exports = {
    bubbleSort
}