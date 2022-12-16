function solution(a, b) {
    let num = a;
    let denom = b;
    for (let i=Math.min(a, b); i>1; i--) {
        if (a % i === 0 && b % i === 0) {
            num = a / i;
            denom = b / i;
            break;
        }
    }
    let prime = denom;
    while (true) {
        if (prime % 2 === 0) {
            prime /= 2;
            continue;
        } else if (prime % 5 === 0) {
            prime /= 5;
            continue;
        }
        if (prime === 1) {
            return 1;
        } else {
            return 2;
        }
    }
}