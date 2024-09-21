function createCounter(count){
    function counter(){
        return count ++;
    }

    return counter;
}

const counter = createCounter(42);
console.log(counter());
console.log(counter());
console.log(counter());


