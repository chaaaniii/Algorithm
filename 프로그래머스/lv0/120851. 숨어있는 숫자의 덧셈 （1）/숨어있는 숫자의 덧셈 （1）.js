function solution(my_string) {
    let num = '0123456789'
    let nums = []
    let str = my_string.split('')
    nums = (str.filter((e)=>(num.includes(e))))
    return [...nums].map(n => +n).reduce((a,c)=>{a = a + c; return a},0)
}