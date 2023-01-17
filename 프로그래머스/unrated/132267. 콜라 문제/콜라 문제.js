function solution(a, b, n) {
    let result = 0;
    let q = 0;
    let total = n;

    while (total >= a) {
        q = Math.floor(total / a) * b
        result += q
        total = q + total % a
    }
    return result;
}