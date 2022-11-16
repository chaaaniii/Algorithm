function solution(n) {
    let num = 1;
    let result = [];
    for ( let i = 1; num <= n; i++){
        result.push(i)
        num = num * i
    }
    return Math.max(...result)-1
}