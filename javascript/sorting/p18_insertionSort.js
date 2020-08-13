/*
    CLRS Section 2.1, p. 18
*/

const insertionSort = (A) => {
    for (let j = 1; j < A.length; j++) {
        let key = A[j];
        // insert A[j] into the sorted sequence A[0]...A[j-1]
        let i = j - 1;
        while (i >= 0 && A[i] > key) {
            A[i + 1] = A[i];
            i--;
        }
        A[i + 1] = key;
    }
}

module.exports = {
    insertionSort
}