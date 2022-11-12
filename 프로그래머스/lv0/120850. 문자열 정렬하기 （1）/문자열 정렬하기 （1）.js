function solution(my_string) {
    let num = '0123456789'
    let str = my_string.split('')
    let result = str.filter((e)=>num.includes(e))
    return result.map(n => +n).sort()
}