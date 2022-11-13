function solution(array) {
    let i = Math.floor(array.length / 2)
    return array.sort((a,b)=>a-b)[i]
}