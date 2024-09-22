function countMatches(pattern,rule,key){
    let obj={
        "type":0,
        "color":1,
        "name":2
    }
    let count=0;
    let find=obj[rule]
    // console.log(find)
    for(let i of pattern){
        if(i[find]===key)
            count++
    }
    return count;

}




console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "type", "phone"))

