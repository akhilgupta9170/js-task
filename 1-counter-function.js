// Counter Function -> increase counter value by 1 for every  call to this function.
//  Used function clouser to increment counter value  by 1 for every call to this function


function createCounter(count){
    function counter(){
        return count ++;
    }

    return counter;
}
//const createCounter = (count) => () => count++;

const counter = createCounter(-1);
console.log(counter());
console.log(counter());
console.log(counter());
