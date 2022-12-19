function solution(absolutes, signs) {
    let result = [];
    for (let i = 0; i < absolutes.length; i++){
        if(signs[i] === true){
            result.push(absolutes[i])
        } else {
            result.push(-absolutes[i])
        }
    }
    return result.reduce((a,c)=> a = a + c )
}