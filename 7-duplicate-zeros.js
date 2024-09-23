// Duplicate the Zero in the array.
// Method 1- By using slice and splice method duplicated the zeros in the array.

// Method 2- By shifting the element to the  right.


function duplicateZeros(arr) {
    // let len = arr.length;
    // // for (var i = 0; i < arr.length; i++) {
    // //     if (arr[i] === 0) {
    // //         arr.splice(i, 0, 0);
    // //         i++;
    // //     }
    // // }
    // // newArr=arr.slice(0, len)
    // let count=0;
    // for(let i=0; i<arr.length; i++) {
    //     if(arr[i] === 0) {
    //         count++;
    //     }
    
    // }
    // let newArr = new Array(len+count).fill(0);
    // let newArrLength=len+count;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==0){
          for(let j=arr.length-1;j>i;j--){   
          arr[j]=arr[j-1];                         //shifting of array elements
           }
           i++;
         }
         
      }
      




    return arr;



}


console.log(duplicateZeros([1,0,2,3,0,4,5,0]));

