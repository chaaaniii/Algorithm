function solution(n) {
    let odd = 0;
    for( let i = 0; i <= n; i++ ){
        if(i % 2 === 0) odd += i;
    }
    return odd;
}