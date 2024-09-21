//Maximum Product of Three Numbers in array

function maximumProduct(nums) {
   
    nums.sort()

   let product =1;
    let count=0;
    let arrlength=nums.length-1;
        while(count<3){
           product*=nums[arrlength]
           arrlength--
            count++
       }
       return product;
    }

console.log(maximumProduct([1,2,3,4,8,5,9,5,7,2]))