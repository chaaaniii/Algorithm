function solution(n) {
    let nums = [];
    while (n%2 == 0) {
        n = n/2
        nums.push(2)
    }
    for (let i=3;i*i <= n;i=i+2) {
        while (n%i==0) {
            n = n/i
            nums.push(i)
        }
    }
    if (n>2) {
        nums.push(n)
    }
    let set = new Set(nums);
    let result = [...set];
    return result
}