function solution(n) {
    let result = [];
    for (let i = 1; i <= n ; i++){
        result.push(i)
    }
    return result.filter((x)=> x%2 != 0)
}