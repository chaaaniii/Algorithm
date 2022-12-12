function solution(n) {
    if (n === 0 ) return 0;
    let result = [];
    for (let i = 0; i <= n; i++){
        if(n%i === 0){
            result.push(i)
        }
    }
    return result.reduce((a,c) => a + c)
}