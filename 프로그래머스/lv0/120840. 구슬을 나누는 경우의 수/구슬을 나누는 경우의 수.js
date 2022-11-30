function factorial(num) {
    let x = BigInt(1);
    for(let i=2; i<=num ; i++){
        x *= BigInt(i);
    }
    return x;
}

function solution(balls, share) {
    var answer = factorial(balls) / (factorial(balls-share) * factorial(share));
    return answer;
}