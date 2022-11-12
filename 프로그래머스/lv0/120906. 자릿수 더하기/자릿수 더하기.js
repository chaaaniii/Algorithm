function solution(n) {
    let result = []
    result = (''+n).split('')
    console.log(result)
    
    return  [...result].map(n => +n).reduce((acc,curr)=>{acc = acc + curr; return acc})
}