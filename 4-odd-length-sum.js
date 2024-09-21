//Sum of All Odd Length Subarrays


function sumOddLengthSubarrays(arr) {   
    var sum =0;
    var l=arr.length;
    for(var i=0; i<l; i++){
        for (var j=i;j<l;j+=2){
            for (var k=i;k<=j;k++)
                sum+=arr[k];
        }
    }
    
    return sum;
}


console.log(sumOddLengthSubarrays([1,4,2,5,3]));