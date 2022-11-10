function solution(strlist) {
    let result = [];
    let str = [...strlist]
    for(let i = 0; i < strlist.length; i++){
     result.push(str[i].length)
    }
    return result
}