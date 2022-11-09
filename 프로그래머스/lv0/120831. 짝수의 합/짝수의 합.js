function solution(n) {
    let even = 0;
    for( let i = 0; i <= n; i++ ){
        if(i % 2 === 0) even += i;
    }
    return even;
}