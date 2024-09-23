//Maximum Product of Three Numbers in array
// TODO implement without using sort function and loops over 
// Sorted the array in ascending order Then calculated the product of the maximum three numbers

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




    








}
