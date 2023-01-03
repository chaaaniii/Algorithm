function solution(d, budget) {
    let result = 0;
    let change = d.sort((a,b)=>a-b)
    let sum = 0
    
    for(let i = 0; i < d.length; i++){
        sum = sum + change[i]
        if ( sum <= budget){
            result++
        }
    }
    return result
}