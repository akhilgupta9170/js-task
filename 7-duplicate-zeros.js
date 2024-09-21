

function duplicateZeros(arr) {
    let len = arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
        }
    }
    newArr=arr.slice(0, len)



    return newArr;



}


console.log(duplicateZeros([1,2,3]));

