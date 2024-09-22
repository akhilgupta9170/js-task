//truncate Sentence Lab
//TODO implement without using split


// function truncateSentence(sent, count) {
//     let words = sent.split(' ');
//     words.length=count;


//     //let truncatedWords = [];
  
//     // for (let i = 0; i <count; i++) {
//     //     let present = words[i];
//     //     truncatedWords.push(present);
      
//     // }
//     return words.join(' ');
//   }

//   console.log(truncateSentence("What is the solution to this problem",6)); 


function truncateSentence(Sentence,counter){
    let count =0;
    let len=Sentence.length;
    let array = new Array(len)
    for(let i=0; i<len; i++){
        if(Sentence[i] ===' '){
            count++;
        }
        if(count!==counter){
            array[i]=Sentence[i];
        }else if(count>counter){
            break;
        }
    } 
    return array.toString();


}
  
console.log(truncateSentence("What is the solution to this problem",6)); 
 // "What is the solution"