function solution(n) {
    let num = [];
    
    for(let i = 1; i <= 6 ; i++){
        if (n*i % 6 === 0){
            num.push((n*i)/6)
        }
    }
    return num[0]
}