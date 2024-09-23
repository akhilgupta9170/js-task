// Array Wrapper
// With the help of valueOf and toString() function.



class ArrayWrapper {
    constructor(array) {
        this.array = array;
    }
    valueOf(){
       let x=0;
      return  this.array.reduce((accumulator,current) =>accumulator+current,x)
    }
    toString(){
        
           return `"[${this.array}]"`;
    }

}
let obj=new ArrayWrapper([1,2,3,5])
//console.log(obj)
let obj1=new ArrayWrapper([1,2,3])
console.log(obj1+obj)
console.log(String(obj1))
