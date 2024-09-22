// function createCounter(count){
//     function counter(){
//         return count ++;
//     }

//     return counter;
// }
const createCounter = (count) => () => count++;

const counter = createCounter(-1);
console.log(counter());
console.log(counter());
console.log(counter());
