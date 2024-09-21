var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i=0; i<nums.length; i++){
        if(set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
    
};
console.log(containsDuplicate([1,-2,3,5,-2]))


// var containsDuplicate = function(nums) {
//     var max = nums[0];
//     for (i = 1; i < nums.length; i++){
//         if (nums[i] > max)
//             max = nums[i];
//     }
//     //console.log(max);
//     let array= new Array(max+1).fill(0);
//     for (i = 0; i < nums.length; i++){
//         array[nums[i]]++;
//         if (array[nums[i]] > 1)
//             return true;
        
//     }

// }
    
// console.log(containsDuplicate([ 1, 4, 5, 0, 0 ]))