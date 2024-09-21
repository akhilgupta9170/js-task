

const missingNumber = function(nums) {
    let max=nums[0]
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > max) 
            max = nums[i]
    }
    // console.log(max)
    let sum = (max * (max + 1)) / 2;
    // console.log(sum) 
    let sumOfArray = 0;
    for(let i = 0; i < nums.length; i++){
        sumOfArray += nums[i];
    }
    // console.log(sumOfArray)  
    return sum - sumOfArray;

};



console.log(missingNumber([3, 0, 1])); 
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); 