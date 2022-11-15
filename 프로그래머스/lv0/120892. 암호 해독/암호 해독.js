function solution(cipher, code) {
    let arr = cipher.split('');
    let result = []
    
    for (let i = 1; i <= cipher.length; i++){
        (code*i <= cipher.length)
        result.push(arr[code*i-1])
    }
    return result.join('')
}