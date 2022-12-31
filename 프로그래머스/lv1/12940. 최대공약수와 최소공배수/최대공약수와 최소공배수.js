function solution(n, m) {
    let GCD = 0;
    let LCM = 0;
    let num = n > m ? n : m;
    for(let i = 0; i <= num; i++){
        if(n % i === 0 && m % i ===0){
            GCD = i;
        }
    }
    LCM = n * m / GCD
    return [GCD,LCM]
}