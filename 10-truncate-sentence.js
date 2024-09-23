//Truncate Sentence Lab
// Using split function to split a sentence into array then perform the task on that array.
//......................................................

function truncateSentence(sent, count) {
    let words = sent.split(' ');
    words.length=count;


    let truncatedWords = [];
  
    for (let i = 0; i <count; i++) {
        let present = words[i];
        truncatedWords.push(present);
      
    }
    return words.join(' ');
  }

    
console.log(truncateSentence("What is the solution to this problem",6)); 
