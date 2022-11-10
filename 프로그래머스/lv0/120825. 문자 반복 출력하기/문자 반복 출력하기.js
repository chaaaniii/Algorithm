function solution(my_string, n) {
    let result = []
    for (let i = 0 ; i < my_string.length ; i++){
        result.push(my_string[i].repeat(n))
    }
    return result.join('')
}