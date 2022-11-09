function solution(array, n) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]===n){
            result.push(array[i]);
        }
    }    
return result.length
}
