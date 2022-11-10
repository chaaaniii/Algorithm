function solution(sides) {
    let longest = Math.max(...sides)
    let result = sides.reduce((a,c)=>a+c,0) - longest
    return longest < result ? 1: 2
}
