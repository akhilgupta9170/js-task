function createHelloWorldFunction(){
    return function(){
       return `Hello World`;
    }
}
console.log(createHelloWorldFunction(1,2,3)([], [1, 2, 3], 42, null));
