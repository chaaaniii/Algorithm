function solution(dots) {
    let result = []
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            result.push((dots[j][0] - dots[i][0]) / (dots[j][1] - dots[i][1]))
        }
    }
    return result.length !== [...new Set(result)].length ? 1 : 0
}