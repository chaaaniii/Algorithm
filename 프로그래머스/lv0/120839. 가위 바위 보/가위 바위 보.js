function solution(rsp) {
    let num = rsp.split('')
    for (let i = 0; i < num.length; i++){
        if (num[i] === '0'){
            num[i] = '5'
        } else if ( num[i] === '2'){
            num[i] = '0'
        } else if ( num[i] === '5'){
            num[i] = '2'
        }
    }
    return num.join('')
}