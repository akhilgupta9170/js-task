// Return Hello World from the function whatever the argument is passed to the function.
// Closure functions


function createHelloWorldFunction(){
    return function(){
       return `Hello World`;
    }
}
console.log(createHelloWorldFunction(1,2,3)([], [1, 2, 3], 42, null));
