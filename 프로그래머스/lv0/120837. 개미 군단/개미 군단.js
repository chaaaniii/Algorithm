function solution(hp) {
    let ge = Math.floor(hp/5)
    let sol = Math.floor((hp-ge*5)/3)
    let wo = Math.floor(hp-ge*5-sol*3)
    
    return ge+sol+wo
}