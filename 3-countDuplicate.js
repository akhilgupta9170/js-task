// Count Duplicates 
// used "Set" to store unique values, and checked Set in every iteration ,if there is a value already in the set then it returns false True.

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

// Used Hashmap to store to the count of each values of the array


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
    
console.log(containsDuplicate([ 1, 4, 5, 0, 0,8 ]))