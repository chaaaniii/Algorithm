function solution(n) {
    let num = []
    for (let i = 1; i <= n; i++){
        num.push(i)
    }
    return num.filter((x) => n%x === 0).length
}