// Move Zeros to the end of the array
// Using loop over loop to swap the zeros with non zero. 


function moveZeros(arr){
    for(var i=0;i<arr.length;  i++) {
      for(var j=0;j<arr.length-i-1; j++) {
        if(arr[j]==0 && arr[j+1] !=0){
            var temp=arr[j];
            arr[j] = arr[j+1];
          arr[j+1] = temp;
        }

      }


}
return arr;

}

// console.log(moveZeros([0,1,5,0,2]))
// console.log(moveZeros([1,0,0,4,5]))

console.log(moveZeros([0,0,0,0,0,0,0,1,-1,2,0]))