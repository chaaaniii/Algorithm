function solution(dots) {
    let a = [];
    let b = [];
    for (let i = 0 ; i < dots.length; i++){
        a.push(dots[i][0])
        b.push(dots[i][1])
    }
    let x = Math.max(...a)-Math.min(...a)
    let y = Math.max(...b)-Math.min(...b)
    return x*y
}