// Calculate tax.

function calculateTax(slab,income){
    
    let tax=0;
    let remainingAmount=income;

    let previousupper=0
    for(let row=0; row<slab.length; row++){
        
        if(remainingAmount>=slab[row][0]){
        tax+= (slab[row][0]-previousupper)*(slab[row][1]/100);
        }else{
            tax+= (remainingAmount)*(slab[row][1]/100);

        }
        previousupper = slab[row][0];
        remainingAmount=income-slab[row][0]
        
        
 
        
        }
        return tax;


    }
      
console.log(calculateTax([[3, 50], [7, 10], [12, 25]],10))