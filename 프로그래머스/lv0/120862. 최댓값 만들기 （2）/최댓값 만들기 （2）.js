function solution(numbers) {
    let result = []
    
    for ( let i = 0; i <= numbers.length-1; i++)
    for ( let j = 0; j <= numbers.length-1; j++){
        if( i != j){
            result.push(numbers[i]*numbers[j])
        }
    }
    return Math.max(...result)
}