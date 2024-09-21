// plus one to the large integer in the array

function get(arr) {
    let num= arr.join("");
    num=Number(num)+1;
    let array=[]
    while(num){
        let a=num%10;
        array.unshift(a);
        num=Math.floor(num/10);
    }
    return array;
}

console.log(get([9,9,9,9,9,9,9,9,9,9]));