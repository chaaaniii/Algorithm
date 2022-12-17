function solution(x) {
    let nums = []
    nums = (x.toString().split('').map((x)=> x*1))
    return (x % nums.reduce((a,c)=> a+c) === 0) ? true : false
}