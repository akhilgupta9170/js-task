//truncate Sentence Lab

function truncateSentence(sent, count) {
    let words = sent.split(' ');
    let truncatedWords = [];
  
    for (let i = 0; i <count; i++) {
        let present = words[i];
        truncatedWords.push(present);
      
    }
    return truncatedWords.join(' ');
  }

  console.log(truncateSentence("What is the solution to this problem",6)); 