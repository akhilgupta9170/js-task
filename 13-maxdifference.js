//Maximum Difference Between Increasing Elements


function maxDifference(arr) {
    let min = arr[0];
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            maxDiff = Math.max(maxDiff, arr[i] - min);
        }
    }

    return maxDiff;
}



console.log(maxDifference([1, 2, 3, 4, 5]));
console.log(maxDifference([7, 1, 5, 4])) 